class Menu{
    constructor(){

    }
    consultarMenu(){
        let verMenuBtn=document.getElementById('verMenuBtn')
        verMenuBtn.addEventListener('click',function(){
        verMenuBtn.href="index.html"
        })
    }
    volverInicio(){
        let irInicio=document.getElementById('salidaMenu');
        irInicio.addEventListener('click',function(){
        irInicio.href="inicio.html"
        })
    }
}
export let irInicio=new Menu();


