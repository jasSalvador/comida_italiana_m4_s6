/*
Cómo requisito, debes utilizar las matrices, y todo conocimiento de JavaScript para su desarrollo. 
La lógica principal de este sitio es que, después de seleccionar algo para beber y un plato del menú, en la 
sección de “cuenta”, se vea el registro del producto, su precio y el total;
*/

function cuenta(){
    let productos = [];
    let insertarDatos = document.getElementById("insertarDatos");

    function calcularCuenta(productos){
        let total = 0;
        let filas = "";
        productos.forEach(producto => {
            total += producto.precio;
            filas += `
                <tr>
                    <td>${producto.nombre}</td>
                    <td>$${producto.precio}</td>
                </tr>
            `
        });
        filas += `
            <tr>
                <td>Total:</td>
                <td>$ ${total}</td>
            </tr>
        `;
        insertarDatos.innerHTML = filas;
    }


    let checkbox = document.querySelectorAll('input[type = "checkbox"]');
    checkbox.forEach(function(checkbox) {

        if (checkbox.checked) {
            let productoNombre = checkbox.name;
            let precio = parseInt(checkbox.value);
                
            //agregar productos y total
            productos.push({nombre: productoNombre, precio});
        }
    });
    
    calcularCuenta(productos);
}

