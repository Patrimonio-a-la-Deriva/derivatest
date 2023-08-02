const d = document;

export default function Boton2(pr, selector) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector);
    d.addEventListener('mouseover', (e) => {
        if (e.target.matches(pr)) {
            $select.textContent = 'Santiago Centro'
        }
        else{
            $select.textContent = ''
        }
    })

}

