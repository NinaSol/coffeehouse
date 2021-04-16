import {Empleado} from '../empleado.js';
class Gerente extends Empleado{
    constructor(nombre,dni,añosTrabajando,apercibimientos,salario){
        super(nombre,dni,añosTrabajando,apercibimientos,salario);
    }
    asignarPedidosACamareros(){}
    verificarCobros(){}
    arqueoDeCaja(){}
    apercibirCamareros(){} 
    coleccionApercibimientos(){}
    iterarCamareroConMenosApercibimientos(){} 
    asiganrMejorCamareroSemanal(){}
    confirmarStockDeComida(){}
    pagarAProveedores(){}
    solicitarMercaderiaProveedores(){}
}
