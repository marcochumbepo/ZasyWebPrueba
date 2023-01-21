var tabla = new Object();
function GuardarFormulario() {
    debugger;
    var Nombres = $("#txtNombres").val();
    var Apellidos = $("#txtApellidos").val();
    var Celular = $("#txtCelular").val();
    var Email = $("#txtEmail").val();
    var Motivo = $("#cboMotivo").val();
    var Sexo = "";
    var isChecked = document.getElementById('radHombre').checked;
    if (isChecked) {
        Sexo = "H";
    } else {
        Sexo = "M";
    }


    if (Nombres == "") {
        alert("POR FAVOR INGRESE LOS NOMBRES");
    } else if (Apellidos == "") {
        alert("POR FAVOR INGRESE LOS APELLIDOS");
    } else if (Celular == "") {
        alert("POR FAVOR INGRESE EL NÚMERO DE CELULAR");
    } else if (Email == "") {
        alert("POR FAVOR INGRESE EL EMAIL");
    } else if (Motivo == "") {
        alert("POR FAVOR SELECCIONE EL MOTIVO");
    } else if (Sexo == "") {
        alert("POR FAVOR SELECCIONE EL SEXO");
    } else {
        alert("@DECLARE NUM_CELULAR VARCHAR(20) BEGIN DECLARE @RESULTADO VARCHAR(500) = '' IF(EXISTS(SELECT * FROM ATENCION_CLIENTE.DBO.TABLA WHERE @NUM_CELULAR = CELULAR BEGIN SET @RESULTADO = 'EL NUMERO DE CELULAR YA CUENTA CON REGISTROS EN LA BD' END ELSE BEGIN INSERT INTO ATENCION_CLIENTE.DBO.TABLA (NOMBRE, APELLIDOS, CELULAR, EMAIL, SEXO, FECHA_ALTA) VALUES ('" + Nombres + "', '" + Nombres + "', '" + Celular + "','" + Email + "','" + Sexo + "','" + Motivo + "',GETDATE()')) END END)")
        var filas = new Object();
            filas[0] = Nombres;
            filas[1] = Apellidos;
            filas[2] = Celular;
            filas[3] = Email;
            filas[4] = Sexo;
            filas[5] = Motivo;
        filas[6] = '21/01/2023';

        tabla[0] = filas;

    }
}