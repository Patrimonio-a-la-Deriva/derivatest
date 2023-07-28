const d = document;

export default function Boton(btn, text2, img2, btn2, img1, pr) {
    const $btn = d.querySelector(btn),
        $txt2 = d.querySelector(text2),
        $img2 = d.querySelector(img2),
        $btn2 = d.querySelector(btn2),
        $img1 = d.querySelector(img1),
        $pr = d.querySelector(pr);
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn2)) {
            $txt2.textContent = 'sdsad'
        } 
    })


}

