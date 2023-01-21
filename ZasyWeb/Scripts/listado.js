var listado = new Object();

for (var i = 0; i < 6; i++) {
    var filas = new Object();
    filas[0] = 'NOMBRES'+i;
    filas[1] = 'APELLIDOS'+i;
    filas[2] = 'CELULAR' + i;
    filas[3] = 'EMAIL' + i;
    filas[4] = 'SEXO' + i;
    filas[5] = 'MOTIVO' + i;
    filas[6] = 'FECHA' + i;

    listado[i] = filas;
}
AgregarFilas();
function AgregarFilas() {
    var fila = JSON.parse(JSON.stringify(listado));
    var tabla = "";
    tabla = tabla + "<tr><td>" + listado[0][0] + "</td>";
    tabla = tabla + "<td>" + listado[0][1] + "</td>";
    tabla = tabla + "<td>" + listado[0][2] + "</td>";
    tabla = tabla + "<td>" + listado[0][3] + "</td>";
    tabla = tabla + "<td>" + listado[0][4] + "</td>";
    tabla = tabla + "<td>" + listado[0][5] + "</td>";
    tabla = tabla + "<td>" + listado[0][6] + "</td></tr>";

    tabla = tabla + "<tr><td>" + listado[1][0] + "</td>";
    tabla = tabla + "<td>" + listado[1][1] + "</td>";
    tabla = tabla + "<td>" + listado[1][2] + "</td>";
    tabla = tabla + "<td>" + listado[1][3] + "</td>";
    tabla = tabla + "<td>" + listado[1][4] + "</td>";
    tabla = tabla + "<td>" + listado[1][5] + "</td>";
    tabla = tabla + "<td>" + listado[1][6] + "</td></tr>";

    tabla = tabla + "<tr><td>" + listado[2][0] + "</td>";
    tabla = tabla + "<td>" + listado[2][1] + "</td>";
    tabla = tabla + "<td>" + listado[2][2] + "</td>";
    tabla = tabla + "<td>" + listado[2][3] + "</td>";
    tabla = tabla + "<td>" + listado[2][4] + "</td>";
    tabla = tabla + "<td>" + listado[2][5] + "</td>";
    tabla = tabla + "<td>" + listado[2][6] + "</td></tr>";

    tabla = tabla + "<tr><td>" + listado[3][0] + "</td>";
    tabla = tabla + "<td>" + listado[3][1] + "</td>";
    tabla = tabla + "<td>" + listado[3][2] + "</td>";
    tabla = tabla + "<td>" + listado[3][3] + "</td>";
    tabla = tabla + "<td>" + listado[3][4] + "</td>";
    tabla = tabla + "<td>" + listado[3][5] + "</td>";
    tabla = tabla + "<td>" + listado[3][6] + "</td></tr>";

    tabla = tabla + "<tr><td>" + listado[4][0] + "</td>";
    tabla = tabla + "<td>" + listado[4][1] + "</td>";
    tabla = tabla + "<td>" + listado[4][2] + "</td>";
    tabla = tabla + "<td>" + listado[4][3] + "</td>";
    tabla = tabla + "<td>" + listado[4][4] + "</td>";
    tabla = tabla + "<td>" + listado[4][5] + "</td>";
    tabla = tabla + "<td>" + listado[4][6] + "</td></tr>";

    tabla = tabla + "<tr><td>" + listado[5][0] + "</td>";
    tabla = tabla + "<td>" + listado[5][1] + "</td>";
    tabla = tabla + "<td>" + listado[5][2] + "</td>";
    tabla = tabla + "<td>" + listado[5][3] + "</td>";
    tabla = tabla + "<td>" + listado[5][4] + "</td>";
    tabla = tabla + "<td>" + listado[5][5] + "</td>";
    tabla = tabla + "<td>" + listado[5][6] + "</td></tr>";

    $("#tabFilas").html(tabla);
}
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
        alert("@DECLARE NUM_CELULAR VARCHAR(20) BEGIN DECLARE @RESULTADO VARCHAR(500) = '' IF(EXISTS(SELECT * FROM ATENCION_CLIENTE.DBO.TABLA WHERE @NUM_CELULAR = CELULAR BEGIN SET @RESULTADO = 'EL NUMERO DE CELULAR YA CUENTA CON REGISTROS EN LA BD' END ELSE BEGIN INSERT INTO ATENCION_CLIENTE.DBO.TABLA (NOMBRE, APELLIDOS, CELULAR, EMAIL, SEXO) VALUES ('" + Nombres + "', '" + Nombres + "', '" + Celular + "''" + Email + "''" + Sexo + "''" + Motivo + "')) END END)")
        var filas = new Object();
        

    }
}
function BuscarFiltos() {
    alert("DECLARE @FECHA_INICIO VARCHAR(10) DECLARE @FECHA_FIN VARCHAR(10) SELECT * FROM ATENCION_CLIENTE.DBO.TABLA WHERE FECHA_ALTA BETWEEN CONVERT(DATETIME, @FECHA_INI) AND CONVERT(DATETIME, @FECHA_FIN) ")
}
