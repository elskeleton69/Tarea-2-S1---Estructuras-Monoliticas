function init() {
    $("#clientes_Form").on("submit", (e) => {
      insertar(e);
    });
}
$().ready(() => {
    cargarTabla();
});
  
var cargarTabla = () =>{
    var clientesModelojs = new Clase_clientes_js("","todos") ;
    clientesModelojs.todos();
};

var uno = (clienteId)=>{
    var clientesModelojs = new Clase_clientes_js("", "uno");
    clientesModelojs.uno(clienteId);
};

var insertar = (e) =>{
    e.preventDefault();
    var clientes_form = new FormData($("clientes_Form") [0]);
    var clientesModelojs = new Clase_clientes_js(clientes_form, "insertar");
    clientesModelojs.insertar();
};

init();