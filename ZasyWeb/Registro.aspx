<%@ Page Title="FORMULARIO WEB DE ATENCIÓN AL CLIENTE" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Registro.aspx.cs" Inherits="ZasyWeb.Registro" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
     <div class="card">
  <div class="card-header">
    FORMULARIO WEB DE ATENCIÓN AL CLIENTE
  </div>
  <div class="card-body">
      <div class="row">&nbsp;</div>
   <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Nombres:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <input type="text" name="txtNombres" id="txtNombres" class="form-control form-control-sm" value="" width="100%" />
       </div>
   </div>
   <div class="row">&nbsp;</div>
   <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Apellidos:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <input type="text" name="txtApellidos" id="txtApellidos" class="form-control form-control-sm" value="" width="100%" />
       </div>
   </div>
   <div class="row">&nbsp;</div>
   <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Teléfono celular:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <input type="text" name="txtCelular" id="txtCelular" class="form-control form-control-sm" value="" width="100%" />
       </div>
   </div>
    <div class="row">&nbsp;</div>
    <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Email:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <input type="email" name="txtEmail" id="txtEmail" class="form-control form-control-sm" value="" width="100%" />
       </div>
   </div>
    <div class="row">&nbsp;</div>
    <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Sexo:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radHombre" value="H">
              <label class="form-check-label" for="radHombre">Hombre</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="inlineRadioOptions" id="radMujer" value="M">
              <label class="form-check-label" for="radMujer">Mujer</label>
            </div>
       </div>
   </div>
    <div class="row">&nbsp;</div>
    <div class="row">
       <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12">
           <label><b>Motivo:</b></label>
       </div>
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <select class="form-control form-control-sm" name="cboMotivo" id="cboMotivo">
               <option value="Inc">Incidencia</option>
               <option value="Que">Queja</option>
               <option value="Rec">Reclamación</option>
               <option value="Sug">Sugerencia</option>
           </select>
       </div>
   </div>
      <div class="row">&nbsp;</div>
    <div class="row">
       <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
           <p align="center">
               <button class="btn btn-success" id="btnGuardar" onclick="GuardarFormulario()"> Guardar</button>
           </p>
           
       </div>
   </div>
  </div>
</div>
    <script src="/Scripts/registro.js"></script>
</asp:Content>
