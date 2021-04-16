import {Empleado} from '../empleado.js';
let div;
let input;
let boton;
let propinas;
let coleccionPropinas=[];
export class Camarero extends Empleado{
    constructor(nombre,dni,añosTrabajando,apercibimientos,salario,pedido,numeroMesa){
        super(nombre,dni,añosTrabajando,apercibimientos,salario);
        this.pedido=pedido;
        this.numeroMesa=numeroMesa;
    }
    get getNumeroMesa(){
        return this.numeroMesa;
    }
    set setNumeroMesa(numeroMesa){
        this.numeroMesa=numeroMesa;
    }
    get getPedido(){
        return this.pedido;
    }
    set setPedido(pedido){
        this.pedido=pedido;
    }
    confirmarPedidoAsignado(){}
    cobrarCliente(){}
    agregarPropinas(){
        let i=0;
        let guardar;
        boton=document.getElementById('boton');
        input=document.getElementById('propina');
        div=document.getElementById('imprimir');
        boton.addEventListener('click',e =>{
        guardar =localStorage.setItem(`propina${i}`, `$`+input.value);
        div.append(`$`+input.value+'-');
        localStorage.getItem(`propina${i}`)
        i++;
    })
    }

    coleccionDePropinaDelDia(){
        let total=document.getElementById('total');
        let suma=0;
        boton.addEventListener('click',e =>{
        propinas=coleccionPropinas.push(parseInt(input.value));
        console.log(coleccionPropinas);
          suma+=parseInt(input.value);
          total.innerHTML="$"+suma; 
 
      
    })
    }

    retornarColeccionPropinas(){
        return coleccionPropinas;
    }
    iterarPropinaMasAltaDelDia(){
        let divMax=document.getElementById('propinaMasAlta');
        let botonMax=document.getElementById('propinaMax');
        botonMax.addEventListener('click',e =>{
            let p=this.retornarColeccionPropinas();
            let max= Math.max(...p);
            divMax.innerHTML=max;
            //console.log(max);
    })
    }
    cobrarPropina(){}
    retornarMejorPropinaDeLaSemana(){}
    enviarRecibo(){}



}

let agregarPropinas=new Camarero();
agregarPropinas.agregarPropinas();
let coleccion=new Camarero();
coleccion.coleccionDePropinaDelDia();
let propinaMax= new Camarero();
propinaMax.iterarPropinaMasAltaDelDia()


/*
class Saludo{
  constructor(nombres){
     this.nombres=nombres;
  }

  coleccionNombres(){
   return this.nombres;
 }
  imprimirColeccion(){
    for(let n of this.coleccionNombres()){
      console.log(n)
    }
  }
  
}
let prueba1= new Saludo(["nina","leo"]);
prueba1.imprimirColeccion()
*/











//login de empleado
//asignar pedidos al empleado
//otro html para el empleado
//usar los ids para imprimir pedido
