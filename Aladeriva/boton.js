const d = document;

export default function Boton(btn, text2, img2, btn2) {
    const $btn = d.querySelector(btn),
        $txt2 = d.querySelector(text2),
        $img2 = d.querySelector(img2),
        $btn2 = d.querySelector(btn2);
    d.addEventListener('click', (e) => {
        if (e.target.matches(btn2)) {
            $txt2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem',
                $img2.src = './assets/alemana.jpg';
        } else {
            $txt2.textContent = "Inaugurado en 1873 y trasladado a su ubicación actual en 1934, el Monumento a LosEscritores de la Independencia es un conjunto escultórico que además de estar compuesto por el obelisco con su base de marmol, tiene un pequeño jardín a su alrededor, como se aprecia en el registro, tanto en 1999 como durante los dos últimos años, este componente ha estado presente. La pintura por otro lado, no ha corrido con la misma suerte, en la actualidad, este monumento -de 150 años de antigüedad- está pintado amarillo, el mismo color que se utiliza en las soleras para indicar que no se pueden estacionar vehiculos. Con esta acción no sólo quedaron atrás, los recuerdos del estallido social también se ha ido perdiendo, poco a poco, la leyenda en cada uno de los medallones, cómo se aprecia en el archivo de 2017. La placa de identificación, por último, se puede leer parcialmente.",
            $img2.src = './assets/Monu.jpg';
        }
    })
}