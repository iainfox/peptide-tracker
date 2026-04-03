const drag_bar = document.getElementById("drag_bar")
const add_menu = document.getElementById("add-menu")

if (!drag_bar || !add_menu) { throw new Error("Couldn't find add menu or drag bar") }

let dragging = false

drag_bar.addEventListener("pointerdown", (e) => {
    if (!add_menu.classList.contains("visible")) return
    if (e.button !== 0) return
    dragging = true
    add_menu.classList.add("is-dragging")
    drag_bar.setPointerCapture(e.pointerId)
    e.preventDefault()
})

drag_bar.addEventListener("pointermove", (e) => {
    if (!dragging) return
    let y = e.clientY - 18
    let y_percent = Math.max(10, Math.min(y/document.body.clientHeight*100, 100))
    add_menu.style.top = String(y_percent)+"%"
})

function end_drag(e: PointerEvent) {
    if (!dragging) return
    if (!add_menu) return
    if (!drag_bar) return

    dragging = false
    add_menu.classList.remove("is-dragging")
    if (drag_bar.hasPointerCapture(e.pointerId)) {
        drag_bar.releasePointerCapture(e.pointerId)
    }

    if (Number.parseFloat(add_menu.style.top) > 30) {
        add_menu.classList.remove("visible")
        add_menu.style.top = ""
        // reset_add_menu() TODO
    } else {
        add_menu.style.top = "10%"
    }
}

drag_bar.addEventListener("pointerup", end_drag)
drag_bar.addEventListener("pointercancel", end_drag)









function localDateYMD(): string {
    const d = new Date()
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, "0")
    const day = String(d.getDate()).padStart(2, "0")
    return `${y}-${m}-${day}`
}

add_menu.querySelectorAll<HTMLInputElement>('input[type="date"][name="schedule_start_date"]').forEach((input) => {
    input.value = localDateYMD()
})

const date_type_selector = document.getElementById("schedule_type") as HTMLSelectElement

let section = "daily"
date_type_selector.addEventListener("change", (_) => {
    const value = date_type_selector.value
    section = value
    
    document.querySelectorAll('.date-section').forEach(section => {
        section.classList.remove("visible")
    });

    const activeSection = document.getElementById(`date_${value}_section`);
    activeSection?.classList.add("visible");
});

const daily_time_ul =
    document.getElementById("date_daily_section")?.querySelector<HTMLUListElement>("ul.time-selecter") ?? null

function add_time(section: string, e: Event) {
    e.preventDefault()

    if (!daily_time_ul) return

    const templateBtn = daily_time_ul.querySelector<HTMLButtonElement>("button.time-remove") ?? null
    const existing = daily_time_ul.querySelectorAll('input[type="time"]').length
    const idx = existing + 1

    const li = document.createElement("li")
    li.className = "time-row"

    const input = document.createElement("input")
    input.type = "time"
    input.className = "time"
    input.id = `time_input_${idx}_${section}`
    input.name = `time_input_${idx}_${section}`

    const group = document.createElement("div")
    group.className = "button-group"

    const freshRemove = templateBtn != null ? (templateBtn.cloneNode(true) as HTMLButtonElement) : null

    li.appendChild(input)
    li.appendChild(group)
    if (freshRemove) group.appendChild(freshRemove)

    daily_time_ul.appendChild(li)
    input.focus()
}

Array.from(document.getElementsByClassName("add-time")).forEach(element => {
    (element as HTMLButtonElement)?.addEventListener("click", (e) => add_time("daily", e))
});

daily_time_ul?.addEventListener("click", (e) => {
    const target = e.target as HTMLElement
    const btn = target.closest("button.time-remove")
    if (!btn || !(btn instanceof HTMLButtonElement)) return

    const row = btn.closest("li.time-row")
    if (!row || !daily_time_ul) return

    const times = daily_time_ul.querySelectorAll('li.time-row input[type="time"]')
    if (times.length <= 1) return

    row.remove()
})