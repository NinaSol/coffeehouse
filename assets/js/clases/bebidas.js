export class Bebida {
    constructor(name, ingredients, price,offer, ml, img,id) {
        this.name = name;
        this.ingredients = ingredients;
        this.price = price;
        this.offer = offer;
        this.ml = ml;
        this.img = img;
        this.id = id;
    }

    enfriar() { }
    calentar() { }
    endulzar() { }
   
   
}

class BebidasVeggie extends Bebida {
    constructor(name, ingrdients, price,offer, ml,img) {
        super(name, ingrdients, price,offer, ml,img)
    }

}
class BebidasDairy extends Bebida {
    constructor(name, ingrdients, price,offer, ml,img) {
        super(name, ingrdients, price, offer,ml,img)
    }
}

//export const caramel = new BebidasDairy('Caramel brulee', '(Lorem ipsum dolor sit)', '$200', '250ml',"https://globalassets.starbucks.com/assets/3dacf63a42ac40b4b6f6ed32f8422d0a.jpg?impolicy=1by1_wide_1242");
//export const frappe = new BebidasDairy('Frappuccino frio', '(Lorem ipsum dolor sit)', '$230', '350ml',"https://globalassets.starbucks.com/assets/2cf55066b3ec4547b452aebffe0870cf.jpg?impolicy=1by1_wide_1242");
//export const latte = new BebidasVeggie('Chai latte veggie', '(Lorem ipsum dolor sit)', '$350', '250ml',"https://globalassets.starbucks.com/assets/2d52f16a22fb40ff898be1815ecc952e.jpg?impolicy=1by1_wide_1242");
//export const te = new BebidasVeggie('Te de naranja y mango veggie', '(Lorem ipsum dolor sit)', '$280', '150ml',"https://globalassets.starbucks.com/assets/0f3e19ad457f4b9f9fb5afde29d0c7cf.jpg?impolicy=1by1_wide_1242");
//export let bebidas = [caramel, frappe, latte, te];

