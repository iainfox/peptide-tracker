import "./scripts/select_peptide_from_list.ts"

const title = document.getElementById("date-title")

function getDaySuffix(date: Date) {
    const day = date.getDate()
    if (day >= 11 && day <= 13) return `${day}th`

    const lastDigit = day % 10
    const suffix = { 1: "st", 2: "nd", 3: "rd" }[lastDigit] || "th"

    return `${day}${suffix}`
}

if (title) {
    const today = new Date()

    const day = String(today.getDate()).padStart(2, '0')
    const day_name = getDaySuffix(today)
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const month_name = today.toLocaleString('default', { month: 'long' })
    const year = today.getFullYear()

    title.innerHTML = `<time datetime='${year}-${month}-${day}'>${month_name} ${day_name}: ${month}/${day}</time>`
}

document.querySelectorAll('input[type="checkbox"]').forEach(element => {
    const checkbox = element as HTMLInputElement;
    checkbox.addEventListener("change", (_) => {
        const parent = checkbox.closest('li')
        if (!parent) return

        const radio = parent.querySelector('input[type="radio"]') as HTMLInputElement | null
        if (!radio) return

        if (!checkbox.checked) {
            parent.classList.remove('light')
            radio.removeAttribute("disabled")
            return
        }

        parent.classList.add('light')
        radio.setAttribute("disabled", '')
    })
})
