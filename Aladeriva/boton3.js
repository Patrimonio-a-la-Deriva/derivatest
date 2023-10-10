const d = document;

export default function Boton3(pr, selector, modaldos, btn2, textGenio, textBaquedano, closeProvi) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $modal2 = d.querySelector(modaldos),
        $btn2 = d.querySelector(btn2),
        $textGenio = d.querySelector(textGenio),
        $textBaquedano = d.querySelector(textBaquedano),
        $closeProvi = d.querySelector(closeProvi);
    d.addEventListener('mouseover', (e) => {

        if (e.target.matches(pr)) {
            $select.textContent = 'Providencia'
        }
    })
    // Abrir Modal
    d.addEventListener('click', (e) => {
        if (e.target.matches(pr)) {
            $modal2.classList.remove('none')
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(closeProvi)) {
            $modal2.classList.add('none')
        }
    })


    d.addEventListener('click', (e) => {
        if (e.target.matches(btn2)) {

            $textBaquedano.classList.add('none'),
                $textGenio.classList.remove('none');

        }
    })

}