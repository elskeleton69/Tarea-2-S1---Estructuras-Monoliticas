function init() {
    $("#usuarios_Form").on("submit", (e) => {
      insertar(e);
    });
}
$().ready(() => {
    cargarTabla();
});
  
var cargarTabla = () =>{
    var clientesModelojs = new Clase_clientes_js("","todos") ;
    clientesModelojs.todos();
}

var uno = (clienteId)=>{
    var clientesModelojs = new Clase_clientes_js("", "uno");
    clientesModelojs.uno(clienteId);
}