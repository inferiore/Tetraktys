
function mostrar(id) {
    if (id == "natural") {
        $("#natural").show();
        $("#juridica").hide();
    }

    if (id == "juridica") {
        $("#juridica").show();
        $("#natural").hide();
    }
    
    if (id=="no") {
		$("#juridica").hide();
		$("#natural").hide();
	}
};

function mostrar1(id){
	if(id=="cambio"){
		$("#cambio").show();
	}
	if (id=="no") {
		$("#cambio").hide();
	}
};

function mostrar2(id){
	if (id=="reduccion") {
		$("#reduccion").show();
	}
	if (id=="no") {
		$("#reduccion").hide();
	}
};