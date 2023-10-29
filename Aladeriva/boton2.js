const d = document,
    w = window;



export default function Boton2(pr, selector, modal, closeWindow, escrione, escrionetext, btn22, aleone, aleonetext,
    escridos, escridostext, aledos, aledostext, escritres, escritrestext, aletres, aletrestext,
    textescritores, textalemana, titulouo, btn222,
    btnbaque, btngenio, plazaone, plazaonetext, geneone, geneonetext, textBaquedano, textGenio,
    titleprovi) {
    const $pr = d.querySelector(pr),
        $select = d.querySelector(selector),
        $modal = d.querySelector(modal),
        $escrione = d.querySelector(escrione),
        $escrionetext = d.querySelector(escrionetext),
        $btn22 = d.querySelector(btn22),
        $aleone = d.querySelector(aleone),
        $aleonetext = d.querySelector(aleonetext),
        $escridos = d.querySelector(escridos),
        $escridostext = d.querySelector(escridostext),
        $aledos = d.querySelector(aledos),
        $aledostext = d.querySelector(aledostext),
        $escritres = d.querySelector(escritres),
        $escritrestext = d.querySelector(escritrestext),
        $aletres = d.querySelector(aletres),
        $aletrestext = d.querySelector(aletrestext),
        $textoEscritores = d.querySelector(textescritores),
        $textoAlemana = d.querySelector(textalemana),
        $tituloUno = d.querySelector(titulouo),
        $btn222 = d.querySelector(btn222),
        $btnbaque = d.querySelector(btnbaque),
        $btngenio = d.querySelector(btngenio),
        $plazaone = d.querySelector(plazaone),
        $plazaonetext = d.querySelector(plazaonetext),
        $genioone = d.querySelector(geneone),
        $genioonetext = d.querySelector(geneonetext),
        $textBaquedano = d.querySelector(textBaquedano),
        $textGenio = d.querySelector(textGenio),
        $titleprovi = d.querySelector(titleprovi);


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
    /* boton fuente alemana */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn22)) {
            $escrione.classList.add('hola'),
                $escrionetext.classList.add('hola'),
                $aleone.classList.remove('none'),
                $aleonetext.classList.remove('none'),
                $escridos.classList.add('hola'),
                $escridostext.classList.add('hola'),
                $aledos.classList.remove('none'),
                $aledostext.classList.remove('none'),
                $escritres.classList.add('hola'),
                $escritrestext.classList.add('hola'),
                $aletres.classList.remove('none'),
                $aletrestext.classList.remove('none'),
                $textoEscritores.classList.add('hola'),
                $textoAlemana.classList.remove('none'),
                $tituloUno.textContent = 'Fuente Alemana';
        }
    })
    /* boton escritores */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn222)) {
            $escrione.classList.remove('hola'),
                $escrionetext.classList.remove('hola'),
                $aleone.classList.add('none'),
                $aleonetext.classList.add('none'),
                $escridos.classList.remove('hola'),
                $escridostext.classList.remove('hola'),
                $aledos.classList.add('none'),
                $aledostext.classList.add('none'),
                $escritres.classList.remove('hola'),
                $escritrestext.classList.remove('hola'),
                $aletres.classList.add('none'),
                $aletrestext.classList.add('none'),
                $textoEscritores.classList.remove('hola'),
                $textoAlemana.classList.add('none'),
                $tituloUno.textContent = 'Escritores de la Independencia';
        }
    })

    /* Boton Genio */

    d.addEventListener('click', (e) => {
        if (e.target.matches(btngenio)) {
            $plazaone.classList.add('none'),
                $plazaonetext.classList.add('none'),
                $genioone.classList.remove('none'),
                $genioonetext.classList.remove('none'),
                $textBaquedano.classList.add('none'),
                $textGenio.classList.remove('none'),
                $titleprovi.textContent = 'Genio de la Libertad'

        }
    })


    /* Boton Baque */
    d.addEventListener('click', (e) => {
        if (e.target.matches(btnbaque)) {
            $plazaone.classList.remove('none'),
                $plazaonetext.classList.remove('none'),
                $genioone.classList.add('none'),
                $genioonetext.classList.add('none'),
                $textBaquedano.classList.remove('none'),
                $textGenio.classList.add('none'),
                $titleprovi.textContent = 'General Baquedano'

        }
    })
}

