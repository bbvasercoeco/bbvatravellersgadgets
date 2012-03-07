/*
document.getElementById("Future-Travels").style.backgroundColor = "#00A7DE";
document.getElementById("past-travels").style.backgroundColor = "#FFE100";
document.getElementById("traveller-agenda").style.backgroundColor = "#7EBD50";
*/
//var pathurl = window.top.parent.location.pathname;


gadgets.util.registerOnLoadHandler(datospagina);
function datospagina(){
var nombrepagina = window.webspace.page.name;
alert(window.webspace.page.name);
gadgets.util.getUrlParameters();
}

//var parameters = utils.getUrlParameters();
//alert(window.top.parent.location.pathname);
//alert(pathurl); 
//alert(pathurl.indexOf("Future-Travels"));
/*
if (pathurl.indexOf("Future-Travels")!=-1)
{
	document.getElementById("Future-Travels").style.backgroundColor = "#00A7DE";
}
*/