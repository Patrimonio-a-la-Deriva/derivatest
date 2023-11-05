const d = document;

export default function Boton6(path, selector, modaltres, closeWindow, textestacion, carroestaion, textvilla, carrovilla, titleestacion,
    btnestacion, btnvilla) {
    const $path = d.querySelector(path),
        $selector = d.querySelector(selector),
        $modaltres = d.querySelector(modaltres),
        $close = d.querySelector(closeWindow),
        $textestacion = d.querySelector(textestacion),
        $carroestacion = d.querySelector(carroestaion),
        $textvilla = d.querySelector(textvilla),
        $carrovilla = d.querySelector(carrovilla),
        $titleestacion = d.querySelector(titleestacion),
        $btnestacion = d.querySelector(btnestacion),
        $btnvilla = d.querySelector(btnvilla);
    d.addEventListener('click', (e) => {
        if (e.target.matches(path)) {
            $modaltres.classList.remove('none')
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(closeWindow)) {
            $modaltres.classList.add('none')
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(closeWindow)) {
            $modal.classList.add('none')
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnestacion)) {
            $titleestacion.textContent = 'Estacion Central'
            $textestacion.classList.remove('none'),
            $carroestacion.classList.remove('none'),
            $textvilla.classList.add('none'),
            $carrovilla.classList.add('none');
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(btnvilla)) {
            $titleestacion.textContent = 'Memorial Villa Francia'
            $textestacion.classList.add('none'),
            $carroestacion.classList.add('none'),
            $textvilla.classList.remove('none'),
            $carrovilla.classList.remove('none');
        }
    })


}
