const d = document;

export default function Boton5(path, selector, modaltres, closeWindow) {
    const $path = d.querySelector(path),
        $selector = d.querySelector(selector),
        $modaltres = d.querySelector(modaltres),
        $close = d.querySelector(closeWindow);
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

}
