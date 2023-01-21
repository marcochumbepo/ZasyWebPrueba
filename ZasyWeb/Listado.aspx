<%@ Page Title="Contact" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Listado.aspx.cs" Inherits="ZasyWeb.Listado" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <link href="https://cdn.datatables.net/1.10.16/css/jquery.dataTables.min.css" rel="stylesheet" />
    <h2><%: Title %>.</h2>
    <div class="card">
  <div class="card-header">
    Listado de clientes atendidos
  </div>
  <div class="card-body">
      <div class="row">
         
          <div class="col-lg-4">
              <label><b>Fecha Inicio</b></label>
              <input type="date" class="form-control" name="txtFechaInicio" id="txtFechaInicio" value="" />
          </div>
          <div class="col-lg-4">
              <label><b>Fecha Inicio</b></label>
              <input type="date" class="form-control" name="txtFechaFin" id="txtFechaFin" value="" />
          </div>
          <div class="col-lg"2>
              <br />
              <button class="btn btn-primary" onclick="BuscarFiltos()">Buscar</button>
          </div>
      </div>
      <hr />
    <table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Celular</th>
                <th>Email</th>
                <th>Sexo</th>
                <th>Motivo</th>
                <th>Fecha Alta</th>
            </tr>
        </thead>
        <tbody id="tabFilas">
           
        </tbody>
       
    </table>
  </div>
</div>

<script src="https://cdn.datatables.net/1.10.16/js/jquery.dataTables.min.js"></script>
    <script src="/Scripts/listado.js"></script>
 <script type="text/javascript">
     $(document).ready(function () {
         $('#example').DataTable();
     });
 </script>
    
</asp:Content>

