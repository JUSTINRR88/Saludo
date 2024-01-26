//NODOS DEL DOM
let btn_domc = document.querySelector(".btn");

let texto2 = document.querySelector(".saludo");

function mostrar_texto(){
    let entrada_texto = document.querySelector(".entradaTexto");
    let valor = entrada_texto.value;
    let entrada_texto2 = document.querySelector(".entradaTexto2").value;


    console.log(valor);
    texto2.innerHTML = valor +" " + entrada_texto2;


}

btn_domc.addEventListener("click", mostrar_texto);