const d = document;

export default function Btncaps(btncapuno, patrihome, capunoContent, fotohome) {
    const $capUno = d.querySelector(btncapuno),
        $patrihome = d.querySelector(patrihome),
        $capcontentUno = d.querySelector(capunoContent),
        $fotohome = d.querySelector(fotohome);

    d.addEventListener('click', (e) => {

        if (e.target.matches(btncapuno)) {
            $patrihome.classList.add('none'),
            $capcontentUno.classList.remove('none'),
            $fotohome.classList.add('none');
        }
    })

}