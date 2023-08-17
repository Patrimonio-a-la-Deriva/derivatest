const d = document;

export default function Boton2(pr, selector, modal) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $modal = d.querySelector(modal);
    d.addEventListener('mouseover', (e) => {
        if (e.target.matches(pr)) {
            $select.textContent = 'Santiago Centro'
        }
        else {
            $select.textContent = ''
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(pr)) {
            $modal.classList.remove('none')
        }
    })
}

