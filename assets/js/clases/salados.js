 export class Salados{
    constructor(name, ingredients,price, offer ,quantity,img,id){
        this.name=name;
        this.ingredients=ingredients;
        this.price=price;
        this.offer=offer;
        this.quantity=quantity;
        this.img=img;
        this.id = id;
    }
    set setName(name){
        name=this.name;
    }
    get getName(){
        return this.name;
    }
    set setIngredients(ing){
        ing=this.ingredients;
    }
    get getIngredients(){
        return this.ingredients;
    }
    set setPrice(pr){
        pr=this.price;
    }
    get getPrice(){
        return this.price;
    }
    set setQuantity(qua){
        qua=this.quantity;
    }
    get getQuantity(){
        return this.quantity;
    }
    set setImg(img){
        img=this.img;
    }
    get getImg(){
        return this.img;
    }

    toString(){
        return this.getNombre+'<br>'+this.getPorcion+' '+this.getPrecio;
    }
    calentar(){}
    condimentar(){}
    agregarToppings(){}
  
}
class SaladosVeggies extends Salados{
constructor(name, ingredients,price,offer ,quantity,img){
    super(name, ingredients,price,offer , quantity,img);
}
}
class SaladosDairy extends Salados{
    constructor(name, ingredients,price,offer , quantity,img){
        super(name, ingredients,price,offer , quantity,img);
    }
}
//const jamon = new SaladosDairy('Jamon y pesto','(lorem impsum lorem lorem)','$200',"1 unidad","https://fastfoodnutrition.org/item-photos/full/836.jpg");
//const pollo = new SaladosDairy('Pollo caprese','(lorem impsum lorem lorem)','$350',"1 unidad","https://globalassets.starbucks.com/assets/60ed448383414ddca2d89ea6271c3cf4.jpg?impolicy=1by1_tight_288");
//const queso = new SaladosDairy('Queso a la parrilla','(lorem impsum lorem lorem)','$150',"1 unidad","https://globalassets.starbucks.com/assets/02ea801e3aca434fa2fcccfcd4adba8c.jpg?impolicy=1by1_wide_1242"); 
//const tomate= new SaladosVeggies("Tomate y quesofu","(lorem impsum lorem lorem)","$300","1 unidad","https://globalassets.starbucks.com/assets/f7febd6b86084135b98a13fa95c72f51.jpg?impolicy=1by1_wide_1242");
//export let salados=[jamon,pollo,queso,tomate];


