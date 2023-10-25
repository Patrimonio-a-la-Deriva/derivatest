const d = document;

export default function Btncaps(btncapuno, patrihome, capunoContent, fotohome, capdosContent, btncapdos, captresContent, btncaptres) {
    const $capUno = d.querySelector(btncapuno),
        $patrihome = d.querySelector(patrihome),
        $capcontentUno = d.querySelector(capunoContent),
        $fotohome = d.querySelector(fotohome),
        $capcontentDos = d.querySelector(capdosContent),
        $capDo = d.querySelector(btncapdos),
        $captresContent = d.querySelector(captresContent),
        $captresbtn = d.querySelector(btncaptres);

    d.addEventListener('click', (e) => {

        if (e.target.matches(btncapuno)) {
            $patrihome.classList.add('none'),
                $capcontentUno.classList.remove('none'),
                $fotohome.classList.add('none'),
                $capcontentDos.classList.add('none'),
                $captresContent.classList.add('none');
        }

        if (e.target.matches(btncapdos)) {
            $capcontentDos.classList.remove('none'),
                $patrihome.classList.add('none'),
                $fotohome.classList.add('none'),
                $capcontentUno.classList.add('none'),
                $captresContent.classList.add('none');
        }

        if (e.target.matches(btncaptres)) {
            $captresContent.classList.remove('none'),
                $patrihome.classList.add('none'),
                $fotohome.classList.add('none'),
                $capcontentDos.classList.add('none'),
                $capcontentUno.classList.add('none');
        }
    })



}

