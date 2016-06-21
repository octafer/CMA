var tReq = true;
var tipoDeReq = "0";
var verificaReq = "0";
var tipoDeAlvara = false;
var cemiterios = false;

//var cbValorRequerente = "";
//var cbValorRepresentante = "";

//VARIAVEIS PARA TESTAR SE O REP É COLETIVO E O REQ É COLETIVO
var comboBoxReqEscolhaOpcao = true;
var comboBoxReqOutroreq = false;
var comboBoxReqGeral = false;

var comboBoxRepEscolhaOpcao = true;
var comboBoxReqOutrorep = false;
var comboBoxRepGeral = false;

var requerente = false;
var representante = false;

function myshow(){
        
        alert('terere');
    
}

function showTabela()
{
    var value1 = PF('tabelaWV').getSelectedValue();
    if ((value1 === "o seu nome")){
        document.getElementById("formPretencao:pGroupGeralNomes").style.display = "none";}
       else{ 
           
        document.getElementById("formPretencao:pGroupGeralNomes").style.display = "inline";
    }
}













function showTipoDeAlvara(el)
{
    var value=el.value;
    if ((value === "-Escolha uma opcao-") )  {
        tipoDeAlvara = false;
    }
    else{tipoDeAlvara = true;}
}

function showCemiterios(el)
{
    var value=el.value;
    if ((value === "-Escolha uma opcao-") )  {
        cemiterios = false;
    }
    else{cemiterios = true;}
}





// <editor-fold defaultstate="collapsed" desc="VERIFICA QUAL É O TIPO DE REQUERENTE E ATRIBUI-LHE UM NUMERO">
function tipoRequerenteDados()
{
    if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true) 
    {
        tipoDeReq = "0";
    }
    else{
          tipoDeReq = "1";
      }
      tipoRequerenteSingCampos();
    }
// </editor-fold>

// MOSTRA OS CAMPOS PARA O TIPO DE REQUERENTE
// <editor-fold defaultstate="collapsed" desc="MOSTRA OS CAMPOS CONSOANTE O TIPO DE REQUERENTE">
function tipoReq() 
{
    requerente = true;
    representante = false;
       if (tReq === true)
        {
            if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true) 
            {
                tipoDeReq = "0";
            }
            else{tipoDeReq = "1";
            }
        tReq = false;
    }
    
    
    //Singular
    if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true) 
    {
       // $('#requerenteSingular').show();
        $('#requerenteColetiva').hide();
        $('#divNomeReQ').show();
        $('#divEntReQ').hide();
        $('#divNic').show();
        //$('#divNif').hide();
        $('#divDtValaNif').show();
        $('#divCCaeaQual').hide();
        $('#btAdicionarReqSing').show();
        $('#btAdicionarReqCol').hide();
        
        //
//        $('#divCertidaoreq').hide();
//        var comboBoxReqEscolhaOpcao = true;
//        var comboBoxReqOutroreq = false;
//        var comboBoxReqGeral = false;
        
        
    }
    //Coletivo
    else
    {
        //$('#requerenteColetiva').show();
        $('#requerenteSingular').hide();
        $('#divNomeReQ').hide();
        $('#divEntReQ').show();
        $('#divNic').hide();
        //$('#divNif').show();
        $('#divDtValaNif').hide();
        $('#divCCaeaQual').show();
        $('#btAdicionarReqSing').hide();
        $('#btAdicionarReqCol').show();
        
    }
    pretencao1();
    tipoRequerenteSingCampos();
    
    //CHAMAR FUNÇÕES


}
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="VERIFICA QUAL É O TIPO DE REQUERENTE MOSTRA OS CAMPOS APENAS DE UM TIPO DE REQUERENTE">
function tipoRequerenteSingCampos()
{
    if (tipoDeReq === "0")
    {
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true) 
        {
              document.getElementById("formPretencao:refEntReq").style.display = "inline";
            document.getElementById("formPretencao:morada").style.display = "inline";
//            document.getElementById("formPretencao:cPostalReq").style.display = "inline";
//            document.getElementById("formPretencao:freguesiaReq").style.display = "inline";
//            document.getElementById("formPretencao:concelhoReq").style.display = "inline";
            document.getElementById("formPretencao:nicReq").style.display = "inline";
            document.getElementById("formPretencao:nifReq").style.display = "inline";
            document.getElementById("formPretencao:telefoneReq").style.display = "inline";
            document.getElementById("formPretencao:telemovelReq").style.display = "inline";
            document.getElementById("formPretencao:faxReq").style.display = "inline";
            document.getElementById("formPretencao:emailReq").style.display = "inline";
            document.getElementById("formPretencao:tbDtValReq").style.display = "inline";
            
            
            
        }
        else
        {
           document.getElementById("formPretencao:refEntReq").style.display = "none";
            document.getElementById("formPretencao:morada").style.display = "none";
//            document.getElementById("formPretencao:cPostalReq").style.display = "none";
//            document.getElementById("formPretencao:freguesiaReq").style.display = "none";
//            document.getElementById("formPretencao:concelhoReq").style.display = "none";
            document.getElementById("formPretencao:nicReq").style.display = "none";
            document.getElementById("formPretencao:nifReq").style.display = "none";
            document.getElementById("formPretencao:telefoneReq").style.display = "none";
            document.getElementById("formPretencao:telemovelReq").style.display = "none";
            document.getElementById("formPretencao:faxReq").style.display = "none";
            document.getElementById("formPretencao:emailReq").style.display = "none";
            document.getElementById("formPretencao:tbDtValReq").style.display = "none";
               
        }
    }
    else
    {
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true) 
        {
             document.getElementById("formPretencao:refEntReq").style.display = "none";
            document.getElementById("formPretencao:morada").style.display = "none";
//            document.getElementById("formPretencao:cPostalReq").style.display = "none";
//            document.getElementById("formPretencao:freguesiaReq").style.display = "none";
//            document.getElementById("formPretencao:concelhoReq").style.display = "none";
            document.getElementById("formPretencao:nicReq").style.display = "none";
            document.getElementById("formPretencao:nifReq").style.display = "none";
            document.getElementById("formPretencao:telefoneReq").style.display = "none";
            document.getElementById("formPretencao:telemovelReq").style.display = "none";
            document.getElementById("formPretencao:faxReq").style.display = "none";
            document.getElementById("formPretencao:emailReq").style.display = "none";
            document.getElementById("formPretencao:tbDtValReq").style.display = "none";
        }
        else
        {
           document.getElementById("formPretencao:refEntReq").style.display = "inline";
            document.getElementById("formPretencao:morada").style.display = "inline";
//            document.getElementById("formPretencao:cPostalReq").style.display = "inline";
//            document.getElementById("formPretencao:freguesiaReq").style.display = "inline";
//            document.getElementById("formPretencao:concelhoReq").style.display = "inline";
            document.getElementById("formPretencao:nicReq").style.display = "inline";
            document.getElementById("formPretencao:nifReq").style.display = "inline";
            document.getElementById("formPretencao:telefoneReq").style.display = "inline";
            document.getElementById("formPretencao:telemovelReq").style.display = "inline";
            document.getElementById("formPretencao:faxReq").style.display = "inline";
            document.getElementById("formPretencao:emailReq").style.display = "inline";
            document.getElementById("formPretencao:tbDtValReq").style.display = "inline";
        }
    }
    
}
// </editor-fold>

// se tem representante
// <editor-fold defaultstate="collapsed" desc="VERIFICA SE TEM REPRESENTANTE">
function repSimNao() 
{
    
    if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true) 
    {
        $('#seTemRepresentante').show();
    }
    else
    {
        $('#seTemRepresentante').hide();
        $('#divCertidaorep').hide();
//        var comboBoxRepEscolhaOpcao = true;
//        var comboBoxReqOutrorep = false;
//        var comboBoxRepGeral = false;
    }
    //CHAMAR FUNÇÕES
    
    pretencao1();
}
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc="CHECKBOX A MOSTRAR NO CAMPO PRETENSÃO">
function pretencao1() 
{
  //CASO EXISTA REPRESENTANTE LEGAL
    if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true)
    {
        //_CASO O REQUERENTE SEJA SINGULAR E TENHA REPRESENTANTE LEGAL SINGULAR
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').show();
            
            // copiaProcur  1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // copiaProcur2  1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
        }
        //_CASO O REQUERENTE SEJA SINGULAR E TENHA REPRESENTANTE LEGAL COLETIVO
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true) 
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            showCertidaoRep();
            
        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E TENHA REPRESENTANTE LEGAL SINGULAR
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').show();
            showCertidaoReq();
        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E TENHA REPRESENTANTE LEGAL COLETIVO
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true) 
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            if (requerente === true)
            {
                showCertidaoReq();
            }
            if (representante === true) 
            {
                showCertidaoRep();
            }
            
        }
    }
    //CASO NÃO EXISTA REPRESENTANTE LEGAL
    else 
    {
        //_CASO O REQUERENTE SEJA SINGULAR E NÃO TENHA REPRESENTANTE 
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true)
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            
            // copiaProcur  1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // copiaProcDoRepDoReq  1
            document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
            // copiaProcur2  1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;
        }
        //_CASO O REQUERENTE SEJA COLETIVO E NÃO TENHA REPRESENTANTE 
        if (document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true)
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            showCertidaoReq();
        }
    }
}
// </editor-fold>

// se o representante é singular ou coletivo
// <editor-fold defaultstate="collapsed" desc="VERIFICA SE O REPRESENTANTE É SINGULAR OU COLETIVO">
function showRepSingCol() 
{
    requerente = false;
    representante = true;
    $('#divCertidaorep').hide();
    if (document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
    {
        //$('#requerenteColetiva').hide();
        $('#divNomeReP').show();
        $('#divEntReP').hide();
        $('#divNicRep').show();
        //$('#divNifRep').hide();
        $('#divDtValaNifRep').show();
        $('#divCCaeaQualRep').hide();
        $('#btAdicionarRepSing').show();
        $('#btAdicionarRepCol').hide();
        tipoRepresentanteSingCampos();
        
//        $('#divCertidaorep').hide();
//        comboBoxRepEscolhaOpcao = true;
//        comboBoxReqOutrorep = false;
//        comboBoxRepGeral = false;
        
        
    }
    else
    {
        //$('#requerenteSingular').hide();
        
        $('#divNomeReP').hide();
        $('#divEntReP').show();
        $('#divNicRep').hide();
        //$('#divNifRep').show();
        $('#divDtValaNifRep').hide();
        $('#divCCaeaQualRep').show();
        $('#btAdicionarRepSing').hide();
         $('#btAdicionarRepCol').show();
         tipoRepresentanteSingCampos();
        
    }
    //CHAMAR FUNÇÕES
    
    pretencao1();
    
}
// </editor-fold>



function tipoRepresentanteDados()
{
    if (document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
    {
        verificaReq = "0";
    }
    else{
          verificaReq = "1";
      }
      tipoRepresentanteSingCampos();
    }

function tipoRepresentanteSingCampos()
{
//    var nFazNada = "0";
    if (verificaReq === "0")
    {
        if (document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
        {
            
            document.getElementById("formPretencao:refEntRep").style.display = "inline";
            document.getElementById("formPretencao:tbMoradaRep").style.display = "inline";
//            document.getElementById("formPretencao:tbCodPostRep").style.display = "inline";
//            document.getElementById("formPretencao:tbFregRep").style.display = "inline";
//            document.getElementById("formPretencao:tbConseRep").style.display = "inline";
            document.getElementById("formPretencao:tbNicRep").style.display = "inline";
            document.getElementById("formPretencao:tbNifRep").style.display = "inline";
            document.getElementById("formPretencao:tbTelefoneRep").style.display = "inline";
            document.getElementById("formPretencao:tbTelemovelRep").style.display = "inline";
            document.getElementById("formPretencao:tbFaxRep").style.display = "inline";
            document.getElementById("formPretencao:tbEmailRep").style.display = "inline";
            
        }
        else
        {
            document.getElementById("formPretencao:refEntRep").style.display = "none";
            document.getElementById("formPretencao:tbMoradaRep").style.display = "none";
//            document.getElementById("formPretencao:tbCodPostRep").style.display = "none";
//            document.getElementById("formPretencao:tbFregRep").style.display = "none";
//            document.getElementById("formPretencao:tbConseRep").style.display = "none";
            document.getElementById("formPretencao:tbNicRep").style.display = "none";
            document.getElementById("formPretencao:tbNifRep").style.display = "none";
            document.getElementById("formPretencao:tbTelefoneRep").style.display = "none";
            document.getElementById("formPretencao:tbTelemovelRep").style.display = "none";
            document.getElementById("formPretencao:tbFaxRep").style.display = "none";
            document.getElementById("formPretencao:tbEmailRep").style.display = "none";
            
        }
    }
    else
    {
        if (document.forms['formPretencao']['formPretencao:representante'][0].checked === true) 
        {
            
            document.getElementById("formPretencao:refEntRep").style.display = "none";
            document.getElementById("formPretencao:tbMoradaRep").style.display = "none";
//            document.getElementById("formPretencao:tbCodPostRep").style.display = "none";
//            document.getElementById("formPretencao:tbFregRep").style.display = "none";
//            document.getElementById("formPretencao:tbConseRep").style.display = "none";
            document.getElementById("formPretencao:tbNicRep").style.display = "none";
            document.getElementById("formPretencao:tbNifRep").style.display = "none";
            document.getElementById("formPretencao:tbTelefoneRep").style.display = "none";
            document.getElementById("formPretencao:tbTelemovelRep").style.display = "none";
            document.getElementById("formPretencao:tbFaxRep").style.display = "none";
            document.getElementById("formPretencao:tbEmailRep").style.display = "none";
            
        }
        else
        {
            document.getElementById("formPretencao:refEntRep").style.display = "inline";
            document.getElementById("formPretencao:tbMoradaRep").style.display = "inline";
//            document.getElementById("formPretencao:tbCodPostRep").style.display = "inline";
//            document.getElementById("formPretencao:tbFregRep").style.display = "inline";
//            document.getElementById("formPretencao:tbConseRep").style.display = "inline";
            document.getElementById("formPretencao:tbNicRep").style.display = "inline";
            document.getElementById("formPretencao:tbNifRep").style.display = "inline";
            document.getElementById("formPretencao:tbTelefoneRep").style.display = "inline";
            document.getElementById("formPretencao:tbTelemovelRep").style.display = "inline";
            document.getElementById("formPretencao:tbFaxRep").style.display = "inline";
            document.getElementById("formPretencao:tbEmailRep").style.display = "inline";
        }
    }
}



//MOSTRA A CERTIDAO REQUERENTE N
function showCertidaoReq()
{
    //REQUERENTE
    var value1 = PF('qualidadDeColWV').getSelectedValue();

    //var value1=el.value;
    
    if ((value1 === "-Escolha uma opcao-") || (value1 === "Outro representante legal"))  {
        $('#divCertidaoreq').hide();
        
        //_CASO O REQUERENTE SEJA COLETIVO E NÃO TENHA REPRESENTANTE (cB Outro representante legal)
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][1].checked === true
            && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
            && (value1 === "Outro representante legal"))
        {
            
            comboBoxReqEscolhaOpcao = false;
            comboBoxReqOutroreq = true;
            comboBoxReqGeral = false;
            $('#checkBoxGeral').show();
            $('#copiaProcur').show();
            $('#nicENifPcol').show();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            
            
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcDoRepDoReq 1
            document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA SINGULAR
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][0].checked === true
                && (value1 === "Outro representante legal"))
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').show();
            $('#nicENifPcol').show();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').show();
            
            
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            

        }
        
         //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true
                && (value1 === "Outro representante legal"))
        {
            
            comboBoxReqEscolhaOpcao = false;
            comboBoxReqOutroreq = true;
            comboBoxReqGeral = false;
            //SE REQ OUTRO E REP ESCOLHA
            if (comboBoxReqOutroreq === true && comboBoxRepEscolhaOpcao === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq 1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //SE REQ OUTRO E REP OUTRO
            if (comboBoxReqOutroreq === true && comboBoxReqOutrorep === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;
                

            }
            //SE REQ OUTRO E REP "GERAL"
            if (comboBoxReqOutroreq === true && comboBoxRepGeral === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E NÃO TENHA REPRESENTANTE (cB -Escolha uma opcao-)
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][1].checked === true
            && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
            && (value1 === "-Escolha uma opcao-"))
            
        {
            comboBoxReqEscolhaOpcao = true;
            comboBoxReqOutroreq = false;
            comboBoxReqGeral = false;
            
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            
            // copiaProcur 1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcDoRepDoReq 1
            document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA SINGULAR
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][0].checked === true
                && (value1 === "-Escolha uma opcao-"))
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').show();
            
            // copiaProcur 1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
          

            
            
        }
        
         //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true
                && (value1 === "-Escolha uma opcao-"))
        {
            comboBoxReqEscolhaOpcao = true;
            comboBoxReqOutroreq = false;
            comboBoxReqGeral = false;
            //SE REQ ESCOLHA E REP ESCOLHA
            if (comboBoxReqEscolhaOpcao === true && comboBoxRepEscolhaOpcao === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq 1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //SE REQ ESCOLHA E REP OUTRO
            if (comboBoxReqEscolhaOpcao === true && comboBoxReqOutrorep === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //SE REQ ESCOLHA E REP "GERAL"
            if (comboBoxReqEscolhaOpcao === true && comboBoxRepGeral === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur  1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2  1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
        }
    }
    else
    {
        $('#divCertidaoreq').show();
    
        //_CASO O REQUERENTE SEJA COLETIVO E NÃO TENHA REPRESENTANTE
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][1].checked === true
            && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true)
        {
            
            comboBoxReqEscolhaOpcao = false;
            comboBoxReqOutroreq = false;
            comboBoxReqGeral = true;
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').show();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            
            // copiaProcur  1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcDoRepDoReq  1
            document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
            // copiaProcur2  1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

        }
    
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA SINGULAR
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][0].checked === true)
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').show();
            $('#nicENifPSing').hide();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').show();
            
            // copiaProcur  1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPSing
            document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
            document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
            // copiaProcur2  1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            

        }
        
         //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true)
        {
            
            comboBoxReqEscolhaOpcao = false;
            comboBoxReqOutroreq = false;
            comboBoxReqGeral = true;
            if (comboBoxReqGeral === true && comboBoxRepEscolhaOpcao === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                // copiaProcur  1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq  1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2  1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            if (comboBoxReqGeral === true && comboBoxReqOutrorep === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur  1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            
            if (comboBoxReqGeral === true && comboBoxRepGeral === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur  1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2  1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

                
            }
            
        }
        
    }
}

//MOSTRA A CERTIDAO REPRESENTANTE N
function showCertidaoRep()
{
     //REPRESENTANTE
    var value = PF('qualidadDeColRepWV').getSelectedValue();

    if ((value === "-Escolha uma opcao-") || (value === "Outro representante legal"))  {
        $('#divCertidaorep').hide();
        
        //_CASO O REQUERENTE SEJA SINGULAR E O REPRESENTANTE COLETIVO (cB = Outro representante legal)
        if(document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true &&
                document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true
                && (value === "Outro representante legal"))
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').show();
            $('#nicENifPcol2').show();
            $('#nicENifPSing2').hide();
            
            // copiaProcur 1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

           
        }
        
        //_CASO O REQUERENTE SEJA SINGULAR E O REPRESENTANTE COLETIVO (cB = -Escolha uma opcao-)
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true &&
                document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true &&
                value === "-Escolha uma opcao-")
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').hide();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').hide();
            $('#nicENifPSing2').hide();
            
            // copiaProcur 1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // copiaProcDoRepDoReq 1
            document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPcol2
            document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
            document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            
        }
        
       
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO (cB = Outro representante legal)
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][1].checked === true
                && (value === "Outro representante legal"))
        {
            comboBoxRepEscolhaOpcao = false;
            comboBoxReqOutrorep = true;
            comboBoxRepGeral = false;
            
            // CASO REP OUTRO E REQ ESCOLHA
            if( comboBoxReqOutrorep === true && comboBoxReqEscolhaOpcao === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
               
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

                
            }
            // CASO REP OUTRO E REQ OUTRO
            if( comboBoxReqOutrorep === true && comboBoxReqOutroreq === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            
            // CASO REP OUTRO E REQ "GERAL"
            if( comboBoxReqOutrorep === true && comboBoxReqGeral === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').show();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            
        }
        
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO (cB = Outro representante legal)
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][1].checked === true
                && (value === "-Escolha uma opcao-"))
        {
            comboBoxRepEscolhaOpcao = true;
            comboBoxReqOutrorep = false;
            comboBoxRepGeral = false;
            
            //CASO REP ESCOLHA E CASO REQ ESCOLHA 
            if (comboBoxRepEscolhaOpcao === true && comboBoxReqEscolhaOpcao === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq 1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //CASO REP ESCOLHA E CASO REQ OUTRO 
            if (comboBoxRepEscolhaOpcao === true && comboBoxReqOutroreq === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq 1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //CASO REP ESCOLHA E CASO REQ "GERAL" 
            if (comboBoxRepEscolhaOpcao === true && comboBoxReqGeral === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').hide();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').hide();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcDoRepDoReq 1
                document.getElementById("formPretencao:copiaProcReqDoRep").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPcol2
                document.getElementById("formPretencao:copiaNicPcolRep").checked = false;
                document.getElementById("formPretencao:copiaNifPcolRep").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            
        }
    }
    else
    
    {
        $('#divCertidaorep').show();
        
        //_CASO REQUERENTE SEJA SINGULAR E O REPRESENTANTE COLETIVO
        if(document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true &&
                document.forms['formPretencao']['formPretencao:rdReqTipo'][0].checked === true  &&
                document.forms['formPretencao']['formPretencao:representante'][1].checked === true)
        {
            $('#checkBoxGeral').show();
            $('#copiaProcur').hide();
            $('#nicENifPcol').hide();
            $('#nicENifPSing').show();
            $('#copiaProcDoRepDoReq').show();
            $('#copiaProcur2').hide();
            $('#nicENifPcol2').show();
            $('#nicENifPSing2').hide();
            
            // copiaProcur 1
            document.getElementById("formPretencao:copiaProc").checked = false;
            // nicENifPcol
            document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
            document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
            // copiaProcur2 1
            document.getElementById("formPretencao:copiaProc2").checked = false;
            // nicENifPSing2
            document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
            document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

        }
        
        
        //_CASO O REQUERENTE SEJA COLETIVO E O REPRESENTANTE SEJA COLETIVO
        if (document.forms['formPretencao']['formPretencao:representanteSimNao'][0].checked === true
                && document.forms['formPretencao']['formPretencao:rdReqTipo'][1].checked === true
                && document.forms['formPretencao']['formPretencao:representante'][1].checked === true)
        {
            
            comboBoxRepEscolhaOpcao = false;
            comboBoxReqOutrorep = false;
            comboBoxRepGeral = true;
            
            //CASO REP "GERAL" E REQ ESCOLHA
            if (comboBoxRepGeral === true && comboBoxReqEscolhaOpcao === true)
            {
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').hide();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPcol
                document.getElementById("formPretencao:copiaNicPcolReq").checked = false;
                document.getElementById("formPretencao:copiaNifPcolReq").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //CASO REP "GERAL" E REQ OUTRO
            if (comboBoxRepGeral === true && comboBoxReqOutroreq === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').show();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            //CASO REP "GERAL" E REQ "GERAL"
            if (comboBoxRepGeral === true && comboBoxReqGeral === true)
            {
                
                $('#checkBoxGeral').show();
                $('#copiaProcur').hide();
                $('#nicENifPcol').show();
                $('#nicENifPSing').hide();
                $('#copiaProcDoRepDoReq').show();
                $('#copiaProcur2').hide();
                $('#nicENifPcol2').show();
                $('#nicENifPSing2').hide();
                
                // copiaProcur 1
                document.getElementById("formPretencao:copiaProc").checked = false;
                // nicENifPSing
                document.getElementById("formPretencao:copiaNicPSingReq").checked = false;
                document.getElementById("formPretencao:copiaNifPSingReq").checked = false;
                // copiaProcur2 1
                document.getElementById("formPretencao:copiaProc2").checked = false;
                // nicENifPSing2
                document.getElementById("formPretencao:copiaNicPSingRep").checked = false;
                document.getElementById("formPretencao:copiaNifPSingRep").checked = false;

            }
            
        }
    }
}

//goto para DECLARAÇÃO SOBRE HABILITAÇÃO DE HERDEIROS 
function declaracaoHabilitacao() 
{
    if(document.getElementById("formPretencao:declHabilitacao").checked) 
    {
        $('#habilitacaoHerdeiros').show();
        document.getElementById('habilitacaoHerdeiros').scrollIntoView();
    }
    else 
    {
        $('#habilitacaoHerdeiros').hide();
    }
}

// MOSTRA O CAMPO DE CARREGAR DADOS
function showCarregaDados() 
{
    if(document.getElementById("formPretencao:escrituraHabilitacao").checked || document.getElementById("formPretencao:declHabilitacao").checked
    || document.getElementById("formPretencao:copiaProc").checked || document.getElementById("formPretencao:copiaNicPcolReq").checked
    || document.getElementById("formPretencao:copiaNifPcolReq").checked || document.getElementById("formPretencao:copiaNicPSingReq").checked
    || document.getElementById("formPretencao:copiaNifPSingReq").checked || document.getElementById("formPretencao:copiaProcReqDoRep").checked 
    || document.getElementById("formPretencao:copiaProc2").checked || document.getElementById("formPretencao:copiaNicPcolRep").checked 
    || document.getElementById("formPretencao:copiaNifPcolRep").checked || document.getElementById("formPretencao:copiaNicPSingRep").checked 
    || document.getElementById("formPretencao:copiaNifPSingRep").checked || document.getElementById("formPretencao:outrosDocu").checked
    )   
    {
        $('#carregarPdf').show();
        
    }
    else {
        $('#carregarPdf').hide();
    }
    if (document.getElementById("formPretencao:outrosDocu").checked)
        {
             
            document.getElementById("formPretencao:especificarOutrosDocs").style.display = "inline";
            
        }
        else 
        {
            
            document.getElementById("formPretencao:especificarOutrosDocs").style.display = "none";
            var s= document.getElementById("formPretencao:outrosDocsDesign");
            s.value = '';
        }
}




    


// MOSTRA OS CAMPOS NOME E NIC DO CAMPO REQUERIMENTO APRESENTADO POR radiobutton
// <editor-fold defaultstate="collapsed" desc="CAMPO APRESENTADO POR">
function showApresPor() 
{
    if (document.forms['formPretencao']['formPretencao:apresentadoPor'][2].checked === true)
    {
        $('#campos1').show();
    }
    else 
    {
        $('#campos1').hide();
    }
}
//</editor-fold>




