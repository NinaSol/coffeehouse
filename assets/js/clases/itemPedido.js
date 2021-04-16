export class ItemPedido{
    constructor(quantity,id,name,total, offer){
        this.quantity = quantity;
        this.id = id;
        this.name = name;
        this.total = total;
        this.offer = offer;
    }


    increment(){
        this.quantity++;
    }
    decrement(){
        if(this.quantity>1){
        this.quantity--;
        }
    }
}