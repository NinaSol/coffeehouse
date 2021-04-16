export class Dulces{
    constructor(name, ingredients,price,offer, portion,img,id){
        this.name=name;
        this.ingredients=ingredients;
        this.price=price;
        this.offer = offer;
        this.portion=portion;
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
    set setPortion(por){
        por=this.portion;
    }
    get getUnidad(){
        return this.unidad;
    }
    set setImg(img){
        img=this.img;
    }
    get getImg(){
        return this.img;
    }

    calentar(){}
    endulzar(){}
    agregarToppings(){}

    

}

class DulcesVeggies extends Dulces{
    constructor(name, ingredients,price,offer, portion,img){
    super(name, ingredients,price,offer, portion,img)
    }
}
class DulcesDairy extends Dulces{
    constructor(name, ingredients,price,offer, portion,img){
        super(name, ingredients,price,offer, portion,img)
        }
}

//const medialuna = new DulcesVeggies('Medialuna de chocolate veggie','(Lorem ipsum dolor sit)','$200',"1 unidad","https://globalassets.starbucks.com/assets/11a5dc6219434a4cbf81b195c14a393e.jpg?impolicy=1by1_wide_1242");
//const budin = new DulcesVeggies('Budin de limon veggie','(Lorem ipsum dolor sit)','$200',"1 unidad","https://globalassets.starbucks.com/assets/c636153c255049a487da5db5b9d5f631.jpg?impolicy=1by1_wide_1242");
//const muffin = new DulcesDairy('Muffin de arandanos','(Lorem ipsum dolor sit)','$200',"1 unidad","https://globalassets.starbucks.com/assets/7d4665b4af2541e387336966c6e3f1fb.jpg?impolicy=1by1_wide_1242");
//const torta = new DulcesDairy('Torta de canela y cafe','(Lorem ipsum dolor sit)','$200',"1 unidad","https://globalassets.starbucks.com/assets/f245bb86e2b74e42b8e6888f886930ef.jpg?impolicy=1by1_wide_1242");
//export let dulces=[medialuna,budin,muffin,torta];

