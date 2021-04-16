export class Pedido {
    constructor(cliente, descripcionComida, numeroMesa, items) {
        this.cliente = cliente;
        this.descripcionComida = descripcionComida;
        this.numeroMesa = numeroMesa;
        this.items = items;
    }


    restringirBotones() { }
    eliminarProductoDelPedido() { }
    asignarHorarioDeEntregaEstimado() { }
    confirmarUbicacionDelCliente() { }
    confirmarRecepcionDelPedido() { }
    confirmarCancelacionDelPedido() { }

    guardarItem(item) {

        if (!this.items.some(i => i.id == item.id)) {
            this.items.push(item);
        } else {
            this.items.forEach(e => {
                if (e.id == item.id) {
                    e.quantity = item.quantity;
                }
            });
        }
    }
    eliminarItems(item) {
        this.items = this.items.filter(i => i.id != item.id);
    }
}

//recibe el id y busco el item con ese id y lo elimino
//boton de eliminar y que desaparezca el input