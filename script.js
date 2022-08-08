function esconder1(){
    var ocultar = document.getElementById("ocult1").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult1").style.display = "flex";
    }else
        document.getElementById("ocult1").style.display = "none";
}

function esconder2(){
    var ocultar = document.getElementById("ocult2").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult2").style.display = "flex";
    }else
        document.getElementById("ocult2").style.display = "none";
}

function esconder3(){
    var ocultar = document.getElementById("ocult3").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult3").style.display = "flex";
    }else
        document.getElementById("ocult3").style.display = "none";
}

function esconder4(){
    var ocultar = document.getElementById("ocult4").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult4").style.display = "flex";
    }else
        document.getElementById("ocult4").style.display = "none";
}

function esconder5(){
    var ocultar = document.getElementById("ocult5").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult5").style.display = "flex";
    }else
        document.getElementById("ocult5").style.display = "none";
}

function esconder6(){
    var ocultar = document.getElementById("ocult6").style.display;
    if(ocultar == "none"){
        document.getElementById("ocult6").style.display = "flex";
    }else
        document.getElementById("ocult6").style.display = "none";
}

function traduzir1(){
    let select = document.querySelector('#linguagem');

    let value = select.options[select.selectedIndex];

    let tdz = document.querySelector(".text2");

    if(select.options[select.selectedIndex].value == 2){
        document.getElementById("eng1").style.display = "flex";
        document.getElementById("pt1").style.display = "none";
        document.getElementById("eng2").style.display = "flex";
        document.getElementById("pt2").style.display = "none";
        document.getElementById("eng3").style.display = "flex";
        document.getElementById("pt3").style.display = "none";
        
    }if (select.options[select.selectedIndex].value == 1) {
        document.getElementById("pt1").style.display = "flex";
        document.getElementById("eng1").style.display = "none";
        document.getElementById("pt2").style.display = "flex";
        document.getElementById("eng2").style.display = "none";
        document.getElementById("pt3").style.display = "flex";
        document.getElementById("eng3").style.display = "none";

    }
          
}
