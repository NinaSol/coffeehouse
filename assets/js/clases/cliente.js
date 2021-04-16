import {Pedido} from './pedido.js';
class Cliente{
    constructor(nombre,pedido,numeroMesa,monto){
        this.nombre=nombre;
        this.pedido=pedido;
        this.numeroMesa=numeroMesa;
        this.monto=monto;
    }
    consultarPedido(){
        let agregarPedido = new Pedido();
        agregarPedido.agregarProductoAlPedido();
        }
    

    permitirUbicacion(){}
    agregarProductoAlPedido(){}
    recibirEntregaEnElLocal(){}
    llenarDatosDelPedido(){}
    realizarPedido(){
        //let form=document.getElementById('my-form') 
        //form.addEventListener('click',e =>{
          //form.reset();
        //});

    }
    modificarPedido(){}
    cancelarPedido(){}
    pagar(){}
    darPropina(){}
    calificarPedido(){}
}
let consultaPedido=new Cliente();
consultaPedido.consultarPedido();
//let realizarPedido=new Cliente();
//realizarPedido.realizarPedido();

