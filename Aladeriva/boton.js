const d = document;

export default function Boton(btn, text2, img2, btn2, img1, pr, monu, text3, imx1, imx12) {
    const $btn = d.querySelector(btn),
        $txt2 = d.querySelector(text2),
        $img2 = d.querySelector(img2),
        $btn2 = d.querySelector(btn2),
        $img1 = d.querySelector(img1),
        $pr = d.querySelector(pr),
        $monu = d.querySelector(monu),
        $txt3 = d.querySelector(text3),
        $imx1 = d.querySelector(imx1),
        $imx12 = d.querySelector(imx12);
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn2)) {
            $txt2.classList.add('none'),
                $txt3.classList.remove('none'),
                $imx1.classList.add('none'),
                $imx12.classList.remove('none');

        }
    })


}

