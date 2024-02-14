

class Clase_clientes_js {
    constructor(clientes, ruta) {
        this.clientes = clientes;
        this.ruta = ruta;
    }

    todos() {
        var html = "";
        $.get(
            "../../controller/php/clientes.controller.php?op=" + this.ruta,
            (res) => {

                console.log(res);
                res = JSON.parse(res);
                $.each(res, (index, clientes) => {
                    html += `<tr>
                    <td>${index + 1}</td>
                    <td>${clientes.nombre}</td>
                    <td>${clientes.telefono}</td>
                    <td>${clientes.correo}</td>
                    <td>${clientes.mensaje}</td>
                    <td><button class='btn btn-success' onclick='uno(${
                        clientes.clienteId
                    
                    })'>Editar</button>
                <button class='btn btn-danger'>Eliminar</button> </td>
                </tr>`;
                });
                console.log(html);
                $("#tablaclientes").html(html);
            })
    }

    uno(clienteId) {
        $.post(
            "../../Controllers/usuarios.controller.php?op=" + this.ruta,
            { clienteId: clienteId },
            (user) => {
                console.log({ conPOO: user });
            }
        );
    }

    insertar() {

        $.ajax({
            url: "../../controller/php/clientes.controller.php?op=" + this.ruta,
            type: "POST",
            data: this.usuario,
            processData: false,
            contentType: false,
            cache: false,
            succes: (res) => {
                res = JOSN.parse(res);
                if (res) {
                    alert("se guardo");
                } else {
                    alert("error al guardar");
                }
            }

        })
    }
}