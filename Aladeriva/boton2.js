const d = document,
    w = window;

    

export default function Boton2(pr, selector, modal, btn2, text, textalemana, imgEscriOne, imgAlemanaOne, imgAlemanaTwo, imgEscriTwo, imgEscriThree, imgAlemanaThree, stgoTitulo, btn222, closeWindow) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $modal = d.querySelector(modal),
        $btn2 = d.querySelector(btn2),
        $textEscri = d.querySelector(text),
        $textAle = d.querySelector(textalemana),
        $imgEscriOne = d.querySelector(imgEscriOne),
        $imgAlemanOne = d.querySelector(imgAlemanaOne),
        $imgAlemanaTwo = d.querySelector(imgAlemanaTwo),
        $imgEscriTwo = d.querySelector(imgEscriTwo),
        $imgEscriThree = d.querySelector(imgEscriThree),
        $imgAlemanaThree = d.querySelector(imgAlemanaThree),
        $stgoTitulo = d.querySelector(stgoTitulo),
        $btn222 = d.querySelector(btn222),
        $close = d.querySelector(closeWindow);

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

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn2)) {
            $textEscri.classList.add('none'),
                $textAle.classList.remove('none'),
            $imgEscriOne.classList.add('none'),
                $imgAlemanOne.classList.remove('none'),
                $imgEscriTwo.classList.add('none'),
                $imgAlemanaTwo.classList.remove('none'),
                $imgEscriThree.classList.add('none'),
                $imgAlemanaThree.classList.remove('none'),
                $stgoTitulo.textContent = 'Fuente Alemana';
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(btn222)) {

            $textEscri.classList.remove('none'),
                $textAle.classList.add('none'),
                $stgoTitulo.textContent = 'Escritores de la Independencia',
                $imgEscriOne.classList.remove('none'),
                $imgAlemanOne.classList.add('none'),
                $imgEscriTwo.classList.remove('none'),
                $imgAlemanaTwo.classList.add('none'),
                $imgEscriThree.classList.remove('none'),
                $imgAlemanaThree.classList.add('none');
        }
    })

    d.addEventListener('click', (e) => {
        if (e.target.matches(closeWindow)) {
            $modal.classList.add('none')
        }
    })
}

