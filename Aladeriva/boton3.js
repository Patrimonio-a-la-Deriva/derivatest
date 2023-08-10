const d = document;

export default function Boton3(pr, selector, selector2) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $select2 = d.querySelector(selector2);
    d.addEventListener('mouseover', (e) => {

        if (e.target.matches(pr)) {
            $select.textContent = 'Providencia'
        }
    })

}