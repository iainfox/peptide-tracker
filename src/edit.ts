import './scripts/form_handler.ts'

const add_peptide_button = document.getElementById("add-button")
const add_peptide_menu = document.getElementById("add-menu")

add_peptide_button?.addEventListener("click", (_) => {
    add_peptide_menu?.classList.toggle("visible")
})

const min_max = document.querySelectorAll('input[min][max]')
min_max.forEach(element => {
    if (!(element instanceof HTMLInputElement)) return

    element.addEventListener("change", (_) => {
        const minAttr = element.getAttribute("min")
        const maxAttr = element.getAttribute("max")
        if (!minAttr || !maxAttr) return
        
        const min = Number.parseInt(minAttr, 10)
        const max = Number.parseInt(maxAttr, 10)
        let num = Number.parseFloat(element.value)

        if (isNaN(num)) return

        if (num < min) {
            element.value = String(min)
        } else if (num > max) {
            element.value = String(max)
        } else {
            element.value = String(num)
        }
    });
})