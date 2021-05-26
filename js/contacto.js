//Creamos la función
function ValidarFormulario(){
    //Removemos el div con la clase alert
    $('.alert').remove();
    //Declaración de Variables
    var nombre=$('#nombre').val(),
        apellidos=$('#apellidos').val(),
        telefono=$('#telefono').val(),
        direccion=$('#direccion').val(),
        correo=$('#correo').val(),
        mensaje=$('#mensaje').val(),
        fecha=$('#fecha').val();
    //Validamos el campo Nombre
    if (nombre=="" || nombre==null){
        CambiarColor("nombre");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Nombre Obligatorio")
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(nombre)){
            //Mostrará el mensaje que debe ingresar un nombre Válido
            CambiarColor("nombre");
            MostrarAlerta("No se permiten Caracteres Especiales o Números")
            return false;
        }
    }
    //Validamos el campo Apellido
    if (apellidos=="" || apellidos==null){
        CambiarColor("apellidos");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Apellido Obligatorio")
        return false;
    }else{
        var expresion= /^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
        if(!expresion.test(apellidos)){
            //Mostrará el mensaje que debe ingresar un nombre Válido
            CambiarColor("apellidos");
            MostrarAlerta("No se permiten Caracteres Especiales o Números")
            return false;
        }
    }
    //Validar el télefono
    if (telefono=="" || telefono==null){
        CambiarColor("telefono");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Teléfono Obligatorio")
        return false;
    }
    //Validar la Dirección
    if (direccion=="" || direccion==null){
        CambiarColor("direccion");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Dirección Obligatorio")
        return false;
    }
    //Validar correo
    if (correo=="" || correo==null){
        CambiarColor("correo");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Correo Obligatorio")
        return false;
    }else{
        var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        if(!expresion.test(correo)){
            //Mostrará el mensaje que debe ingresar un correo Válido
            CambiarColor("correo");
            MostrarAlerta("Por favor ingrese un correo Válido")
            return false;
        }
    }
    //Validar el Mensaje
    if (mensaje=="" || mensaje==null){
        CambiarColor("mensaje");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Mensaje Obligatorio")
        return false;
    }
    if (fecha=="" || fecha==null){
        CambiarColor("fecha");
        //Mostramos mensaje de alerta
        MostrarAlerta("Campo Fecha Obligatorio")
        return false;
    }else{
        var expresion= (/\b\d{4}-\d{2}-\d{2}\b/);
        if(!expresion.test(fecha)){
            //Mostrará el mensaje que debe ingresar un nombre Válido
            CambiarColor("fecha");
            MostrarAlerta("Por favor ingrese una Fecha Válida")
            return false;
        }
    }
    $('form').submit();
    return true;
}
    $('input').focus(function (){
        $('.alert').remove();
        ColorDefault('nombre');
        ColorDefault('apellidos');
        ColorDefault('telefono');
        ColorDefault('direccion');
        ColorDefault('correo');
        ColorDefault('mensaje');
        ColorDefault('fecha')
    })
    $('textarea').focus(function (){
        $('.alert').remove();
        ColorDefault('mensaje');
    })
    //Creamos funcion de color por defecto a los bordes de los input
    function ColorDefault (dato){
        $('#' + dato).css({
            border: "1px solid #999"
        });
    }
    //Creamos función para cambiar color de borde de los input
    function CambiarColor (dato){
        $('#' + dato).css({
            border: "1px solid #dd5144"
        });
    }
    //Funcion para mostrar alerta
    function MostrarAlerta(texto){
        $('#nombre').before('<div class="alert">Error: '+ texto +'</div>');
    }