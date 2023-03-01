var rotate_delay = 2000; 
akt = 1;
vetites=false;
function elozo(){
akt=akt-1;
if (akt<1) akt=38;
document.kepek.src="kepgaleria/kep"+akt+".jpg";
}
function utolso(){
akt=38;
document.kepek.src="kepgaleria/kep"+akt+".jpg";
}
function kovetkezo(){
akt=akt+1;
if (akt>38) akt=1;
document.kepek.src="kepgaleria/kep"+akt+".jpg";
}
function elso(){
akt=1;
document.kepek.src="kepgaleria/kep"+akt+".jpg";
}
function vetit() {
    if(vetites) 
    {
        vetites=false;
        document.getElementById("playbutton").value="Start";
    }
    else
        {
         vetites=true;
            rotate();
            document.getElementById("playbutton").value="Stop";


        }

}
function rotate() {
if(vetites)
{
  akt=akt+1;
if (akt>38) akt=1;
document.kepek.src="kepgaleria/kep"+akt+".jpg";
window.setTimeout("rotate()", rotate_delay);  
}

   
}