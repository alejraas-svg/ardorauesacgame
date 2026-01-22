//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=200; timeIni=200; timeBon=0;
var successes=0; successesMax=1; attempts=0; attemptsMax=4;
var score=0; scoreMax=1; scoreInc=1; scoreDec=1;
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="A JUGAR";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime; var tiAudio=false;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fDefs="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="Felicidades sabes mucho de historia "; messageTime="Tu tiempo ha acabado "; messageError="Te has equivocado "; messageErrorG="Te has equivocado "; messageAttempts="Has agotado tu intentos "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SGlzdG9yaWE="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var col=0; row=0; writeDir=0;
var cw=[["","SA==","RQ==","Ug==","Tw==","RQ==","","","","","",""],["","SQ==","","","","","","","","","",""],["","Uw==","","","","","","","","","",""],["","VA==","Ug==","QQ==","RA==","SQ==","Qw==","SQ==","Tw==","Tg==","",""],["","Tw==","","","","","","TQ==","","","",""],["","Ug==","RQ==","SQ==","Tg==","Tw==","","UA==","","","",""],["","SQ==","","","","","","RQ==","","","",""],["UA==","QQ==","Wg==","","Rw==","","","Ug==","","","",""],["QQ==","","","","VQ==","","","SQ==","","","",""],["Uw==","","","SA==","RQ==","Qw==","SA==","Tw==","","","",""],["QQ==","","","","Ug==","","","","","","",""],["RA==","","","","Ug==","RQ==","WQ==","","","","",""],["Tw==","","","","QQ==","","","","","","",""]];
var x1=[2,2,2,1,4,5,2,8,1,5];
var y1=[1,4,6,8,10,12,1,4,8,8];
var x2=[6,10,6,3,8,7,2,8,1,5];
var y2=[1,4,6,8,10,12,8,10,13,13];
var imaCW=["Historia_resources/media/heroe.jpg","Historia_resources/media/tradicion.jpeg","Historia_resources/media/reinado.jpeg","Historia_resources/media/guerra.jpg","","","Historia_resources/media/historia.jpg","","",""];
var audioCW=["","","","","","","","","",""];
var defCW=["Persona valiente que hace algo importante por los demás ","Costumbre que pasa de generación en generación","Territorio gobernado por un rey ","Momento sin guerra ni conflictos ","Algo que realmente pasó","Persona que gobierna un reino","Estudio del pasado de las personas y los pueblos ","Grupo de países o pueblos gobernados por un solo poder","Tiempo que ya ocurrio ","Conflicto armado estre países o grupos "];
var altCW=["","","","","","","","","",""];
var colNum=12;
var rowNum=13;
