const d = document;

export default function Boton2(pr) {
    const $pr = d.querySelector(pr);
    d.addEventListener('click', (e) => {
        if (e.target.matches(pr)) {
            $pr.textContent= 'Alemana'
        }
    })

}

