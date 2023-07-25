//Funciones anonimas auto ejecutables Menu botones
((d) => {
    const $btnMenu = d.querySelector('.menu-btn'),
        $menu = d.querySelector('.menu');
    /** agregar clases para efectos se abre  */
    $btnMenu.addEventListener('click', (e) => {
        $btnMenu.firstElementChild.classList.toggle('none');
        $btnMenu.lastElementChild.classList.toggle('none');
        $menu.classList.toggle('is-active')
    });
    /** cerra menu en cuanto sea pres       ionado */
    d.addEventListener('click', (e) => {
        if (!e.target.matches('.menu a')) return false;
        $btnMenu.firstElementChild.classList.remove('none');
        $btnMenu.lastElementChild.classList.add('none');
        $menu.classList.remove('is-active')
    });
})(document);

//ContactForm 

((d) => {
    const $form = d.querySelector('.contact-form'),
        $loader = d.querySelector('.contact-form-loader'),
        $response = d.querySelector('.contact-form-response');

    $form.addEventListener('submit', (e) => {
        //se evita que el formulario se envie
        e.preventDefault();
        //se le quita la clase para que se vea
        $loader.classList.remove('none')
        fetch('https://formsubmit.co/ajax/jonathannauto@outlook.com', {
            method: 'POST',
            body: new FormData(e.target)
            //promesas
        }).then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then(json => {
                //se vuelve agregar clase para ocultar
                $loader.classList.add('none');
                //se edita el hash(url) agregando id#
                location.hash = '#gracias'
                $form.reset();
            })
            .catch(err => {
                console.log(err);
                let message = err.statusText || 'Ocurrio un error al enviar, intenta nuevamente'
                $response.querySelector('h3').innerHTML = `Error ${err.statusText}: ${message}`

            }).finally(() => {
                $loader.classList.add('none');
                setTimeout(() => {
                    location.hash = '#close'
                }, 3000);
            });
    });

})(document);


//https://github.com/JonNauto/proyecto/portafolio
//https://JonNauto.github.io/proyecto/portafolio


//Reposito CV Portafolio