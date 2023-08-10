import Boton from "./boton.js";
import Boton2 from "./boton2.js";
import Boton3 from "./boton3.js";

//Funciones anonimas auto ejecutables Menu botones
const d = document;


d.addEventListener('DOMContentLoaded', (e) => {
    Boton('#btn', "#text2", "#img2", "#btn2", "#img1", "#pr", "#monu", "#text3", "#imx1", "#imx12");
    Boton2("#path13821", "#selector");
    Boton3("#path13071", "#selector");
});
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


