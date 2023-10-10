const d = document;

export default function Boton4(pr, selector) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector);
       
    d.addEventListener('mouseover', (e) => {

        if (e.target.matches(pr)) {
            $select.textContent = 'San Miguel'
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(pr)) {
            $modal2.classList.remove('none')
        }
    })

}