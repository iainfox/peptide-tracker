document.querySelectorAll('input[type="radio"]').forEach(element => {
    const radio = element as HTMLInputElement;
    radio.addEventListener('change', (_) => {
        const group = document.querySelectorAll(`input[name="${radio.name}"]`)

        group.forEach(r => {
            r.closest('li')?.classList.remove('selected')
        })

        radio.closest('li')?.classList.add('selected')
    });
})