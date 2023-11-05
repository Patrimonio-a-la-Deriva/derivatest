const d = document,
    w = window;



export default function Boton2(pr, selector, modal, closeWindow, btnsantiago, btnalemana, btnescritores,
    textsantiago, carrosantiago, textalemana, carroalemana, textescritores, carroescritores, titlesantiago,
    textprovi, carroprovi, textbaquedano, carrobaquedano, textgenio, carrogenio, btnprovi, btnbaque, btngenio, titleprovi,
    textsanmiguel, carrosanmiguel, textcarlos, carrocarlos, textgabriela, carrogabriela, titlesanmiguel, btnsanmiguel, btncarlos, btngabriela) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $modal = d.querySelector(modal),
        $btnsantiago = d.querySelector(btnsantiago),
        $btnalemana = d.querySelector(btnalemana),
        $btnescritores = d.querySelector(btnescritores),
        $textsantiago = d.querySelector(textsantiago),
        $carrosantiago = d.querySelector(carrosantiago),
        $textalemana = d.querySelector(textalemana),
        $carroalemana = d.querySelector(carroalemana),
        $textescritores = d.querySelector(textescritores),
        $carroescritores = d.querySelector(carroescritores),
        $titlesantiago = d.querySelector(titlesantiago),
        $textprovi = d.querySelector(textprovi),
        $carroprovi = d.querySelector(carroprovi),
        $textbaque = d.querySelector(textbaquedano),
        $carrobaque = d.querySelector(carrobaquedano),
        $textgenio = d.querySelector(textgenio),
        $carrogenio = d.querySelector(carrogenio),
        $btnprovi = d.querySelector(btnprovi),
        $btnbaque = d.querySelector(btnbaque),
        $btngenio = d.querySelector(btngenio),
        $titleprovi = d.querySelector(titleprovi),
        $textsanmiguel = d.querySelector(textsanmiguel),
        $carrosanmiguel = d.querySelector(carrosanmiguel),
        $textcarlos = d.querySelector(textcarlos),
        $carrocarlos = d.querySelector(carrocarlos),
        $textgabriela = d.querySelector(textgabriela),
        $carrogabriela = d.querySelector(carrogabriela),
        $titlesanmiguel = d.querySelector(titlesanmiguel),
        $btnsanmiguel = d.querySelector(btnsanmiguel),
        $btncarlos = d.querySelector(btncarlos),
        $btngabriela = d.querySelector(btngabriela);


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
        if (e.target.matches(closeWindow)) {
            $modal.classList.add('none')
        }
    })
    /* boton santiago */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnsantiago)) {
            $titlesantiago.textContent = 'Santiago'
            $textsantiago.classList.remove('none'),
                $carrosantiago.classList.remove('none'),
                $textalemana.classList.add('none'),
                $carroalemana.classList.add('none'),
                $textescritores.classList.add('none'),
                $carroescritores.classList.add('none');
        }
    })
    /* boton fuente alemana */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnalemana)) {
            $titlesantiago.textContent = 'Fuente Alemana'
            $textsantiago.classList.add('none'),
                $carrosantiago.classList.add('none'),
                $textalemana.classList.remove('none'),
                $carroalemana.classList.remove('none'),
                $textescritores.classList.add('none'),
                $carroescritores.classList.add('none');
        }
    })
    /* boton escritores */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnescritores)) {
            $titlesantiago.textContent = 'Escritores de la Independencia'
            $textsantiago.classList.add('none'),
                $carrosantiago.classList.add('none'),
                $textescritores.classList.remove('none'),
                $carroescritores.classList.remove('none'),
                $textalemana.classList.add('none'),
                $carroalemana.classList.add('none');
        }
    })

    /* Boton PROVI */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnprovi)) {
            $titleprovi.textContent = 'Providencia'
            $textbaque.classList.add('none'),
                $carrobaque.classList.add('none');
            $textgenio.classList.add('none'),
                $carrogenio.classList.add('none');
            $textprovi.classList.remove('none'),
                $carroprovi.classList.remove('none');

        }
    })

    /* Boton Baque */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnbaque)) {
            $titleprovi.textContent = 'General Baquedano'
            $textprovi.classList.add('none'),
                $carroprovi.classList.add('none'),
                $textbaque.classList.remove('none'),
                $carrobaque.classList.remove('none');
            $textgenio.classList.add('none'),
                $carrogenio.classList.add('none');

        }
    })

    /* Boton Genio */

    d.addEventListener('click', (e) => {
        if (e.target.matches(btngenio)) {
            $titleprovi.textContent = 'Genio de la Libertad'
                $textgenio.classList.remove('none'),
                $carrogenio.classList.remove('none'),
                $textbaque.classList.add('none'),
                $carrobaque.classList.add('none'),
                $textprovi.classList.add('none'),
                $carroprovi.classList.add('none');
                
        }
    })

    /* Boton San miguel */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnsanmiguel)) {
            $titlesanmiguel.textContent = 'San Miguel',
            $textcarlos.classList.add('none'),
          $carrocarlos.classList.add('none'),
          $textgabriela.classList.add('none'),
          $carrogabriela.classList.add('none');
          $textsanmiguel.classList.remove('none'),
          $carrosanmiguel.classList.remove('none');
        }
    })

    /* Boton Carlos Gardel */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btncarlos)) {
          $titlesanmiguel.textContent = 'Carlos Gardel'
          $textsanmiguel.classList.add('none'),
          $carrosanmiguel.classList.add('none'),
          $textgabriela.classList.add('none'),
          $carrogabriela.classList.add('none');
          $textcarlos.classList.remove('none'),
          $carrocarlos.classList.remove('none');
        }
    })

    /* Boton Gabrilea */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btngabriela)) {
            $titlesanmiguel.textContent = 'Gabriela Mistral'
            $textsanmiguel.classList.add('none'),
          $carrosanmiguel.classList.add('none'),
          $textcarlos.classList.add('none'),
          $carrocarlos.classList.add('none');
          $textgabriela.classList.remove('none'),
          $carrogabriela.classList.remove('none');
        }
    })



}

