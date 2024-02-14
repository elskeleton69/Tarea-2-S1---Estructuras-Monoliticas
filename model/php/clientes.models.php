<?php

require_once('../../config/conexion.php');

class ClaseClientes{

    public function todos(){
        $con = new Conectar();
        $con = $con->ProcedimientoConectar();
        $cadena = "SELECT * FROM clientes;";
        $resultado = mysqli_query($con,$cadena);

        return $resultado;
    }

    public function uno($ClienteId){
        try {
            $con = new Conectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "SELECT * FROM clientes WHERE id = $ClienteId;";
            $resultado = mysqli_query($con,$cadena);
    
            return $resultado;
        } catch (Throwable $th) {
            return $th->getMessage();
        }finally{
            $con->close();
        }
    }

    public function insertar($Nombre, $Telefono, $Correo, $Mensaje){
        try {
            $con = new Conectar();
            $con = $con->ProcedimientoConectar();
            $cadena = "INSERT INTO 'clientes' ('nombre', 'telefono', 'correo', 'mensaje') VALUES ('$Nombre', '$Telefono', '$Correo', '$Mensaje');";

            $resultado = mysqli_query($con,$cadena);
    
            return $resultado;
        } catch (Throwable $th) {
            return $th->getMessage();
        }finally{
            $con->close();
        }

    }
    
}
