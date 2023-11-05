import Boton6 from "./assets/boton6.js";
import Boton from "./boton.js";
import Boton2 from "./boton2.js";
import Boton3 from "./boton3.js";
import Boton4 from "./boton4.js";
import Boton5 from "./boton5.js";
import Btncaps from "./btncaps.js";


//Funciones anonimas auto ejecutables Menu botones
const d = document;


d.addEventListener('DOMContentLoaded', (e) => {
    Boton('#btn', "#text2", "#img2", "#img1", "#pr", "#monu", "#text3", "#imx1", "#imx12");
    Boton2("#path13821", "#selector", ".modal", "#closeWindow", "#santiagosantiago", "#santiagoalemana","#santiagoescritores","#textsantiago","#carrosantiago",
    "#textalemana","#carroalemana", "#textescritores", "#carroescritores", "#titleSantiago",
    "#textprovi","#carroprovi","#textbaquedano","#carrobaquedano","#textgenio","#carrolibertad", "#btnprovi", "#btnbaque", "#btngenio", "#titleprovi",
    "#textsanmiguel","#carrosanmiguel","#textcarlos","#carrocarlos","#textgabriela","#carrogabriela","#titlesanmiguel","#btnsanmiguel","#btncarlos","#btngabriela");
   
    Boton6("#path12965", "#selector", ".modalcuatro", "#cerrarestacion", "#textestacion", "#carroestacion","#textvilla","#carrovilla","#titleestacion",
    "#btnestacion", "#btnvilla");
    Boton5("#path13000", "#selector", ".modaltres", "#cerrarsanmiguel");
    Boton3("#path13071", "#selector", ".modaldos", "#btn2", "#textGenio", "#textBaquedano", "#cerrarProvidencia");
    Boton4("#path13000", "#selector");
    Btncaps("#capituloOne","#patrihome", "#capUnoContent", "#fotohome","#capDosContent","#capituloTwo", "#captresContent", "#capituloTre");

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


