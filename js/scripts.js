var contador = 0;   //variables
var bandera = false;
var altura;
var gravedad;
var velocidad;
var tiempo;
alert("d")
/*main();
function main(){
$("#ocultar").hide();
alert("aa")
}*/
$("#ocultar").hide();
function simulador() {
    a = setInterval(function () {
        document.querySelector("#objeto").style.marginTop = contador + "px";
        contador += velocidad;
        if (contador > altura*50) {//1mt=50px
            clearInterval(a);
            document.querySelector(".modal-body").style.marginBottom = "0px";
            bandera = true
        }
    }, 500 / (tiempo * 1000))
}
function alturadeseada(){
    altura=$("#altura").val();
    document.getElementById("altura").value="";
}
function ajustarDatos(a) {
    $("#ocultar").hide();
    switch (a) {
        case 0:      // ORGANIZO LOS DATOS NOMBRE, GRAVEDAD, ALTURA DE LO INGRESADO
            $("#ocultar").show();
            $("#guardarGenerico").on("click", function(){
                altura=$("#alturaGenerico").val();
                gravedad =$("#gravedadGenerico").val();
                nombre=$("#nombre").val();
                document.getElementById("titulo").innerText = "Simulador del planeta "+nombre;
                document.querySelector(".modal-body").style.marginBottom = "500px";
    tiempo = Math.sqrt((2 * altura) / gravedad);
    velocidad = gravedad * tiempo;
            })           
            break;
        case 1:  //para ir evaluando la gravedad y cada planeta
            gravedad =9.807
            document.getElementById("titulo").innerText = "Simulador del planeta Tierra"
            break;
        case 2:
            gravedad =3.71
            document.getElementById("titulo").innerText = "Simulador del planeta Marte"
            break
        case 3:
            gravedad =24.79
            document.getElementById("titulo").innerText = "Simulador del planeta Jupiter "
            break
        case 4:
            document.getElementById("titulo").innerText = "Simulador del planeta Saturno"
            gravedad=10.44
        case 5:
            document.getElementById("titulo").innerText = "Simulador del planeta Venus"
            gravedad=8.87
             break
        case 6:
            document.getElementById("titulo").innerText = "Simulador del planeta Mercurio"
            gravedad=3.7
             break   
        case 7:
            document.getElementById("titulo").innerText = "Simulador del planeta Neptuno"
            gravedad=11.15
         break 
        case 8:
            document.getElementById("titulo").innerText = "Simulador del planeta Urano"
            gravedad=8.87
            break
        case 9:
            document.getElementById("titulo").innerText = "Simulador de la Luna"
            gravedad=1.62
             break          
        default:
            break;
    }
    document.querySelector(".modal-body").style.marginBottom = "500px";
    tiempo = Math.sqrt((2 * altura) / gravedad);
    velocidad = gravedad * tiempo;     // FORMULA DE LA GRAVEDAD 
    if (bandera) {
        document.querySelector(".modal-body").style.marginBottom = "0px";
    }
}
function reiniciar() {
    contador = 0;
    document.querySelector("#objeto").style.marginTop = contador + "px";
    document.querySelector(".modal-body").style.marginBottom = "500px";
}