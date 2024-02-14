<?php
error_reporting(0);
require_once("../../model/php/clientes.models.php");

$clientes = new ClaseClientes;

switch ($_GET['op']) {
    case 'todos':
        $datos = array();
        $datos = $clientes->todos();
        while ($fila = mysqli_fetch_assoc($datos)) {
            $todos[]= $fila;
        }
        echo json_encode($todos);
        break;
    case "uno":
        $UsuarioId = $_POST["UsuarioId"];
        $datos = array();
        $datos = $clientes->uno($UsuarioId);
        $uno = mysqli_fetch_assoc($datos);
        echo json_encode($uno);
        break;
    case "insertar":
        $Nombres = $_POST["nombre"];
        $telefono = $_POST["telefono"];
        $correo = $_POST["correo"];
        $mensaje = $_POST["mensaje"];
        $datos = array();
        $datos = $clientes->insertar($Nombre, $telefono, $correo, $mensaje);
        echo json_encode($datos);
        break;
    
}

