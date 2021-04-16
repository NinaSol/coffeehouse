import { Bebida } from './clases/bebidas.js';
import { Salados } from './clases/salados.js';
import { Dulces } from './clases/dulces.js';
import { Pedido } from './clases/pedido.js';
import { ItemPedido } from './clases/itemPedido.js';
import {unicos} from './historicoComida.js'
export let pedido = new Pedido("", "", "", []);



export function showBrunches(brunchesApi) {
  const brunches = brunchesApi.map(e => new Salados(e.name, e.ingredients, e.price, e.offer, e.quantity, e.img, e._id));
  let resultado = document.getElementById('salados');
  let masPedidos = document.getElementById('masPedidosBrunch')
  resultado.innerHTML = "";
  masPedidos.innerHTML = "";
  brunches.forEach(brunch => {
    //if(masPedidos[0]==brunch.name) algo.innerHTML = brunch.img;
let htmlBrunch =  ` 
<div class="col-sm-4 text-center">
<div class="pt-5">
  <div class="">
  <img class="img-fluid pr-3" style="width: 200px;" src="${brunch.img}" alt="">
  <p class="fw-bold">${brunch.name} ${brunch.quantity} unidad</p>
  <p class="fst-italic">${brunch.ingredients}<p/>
  <p>
  ${brunch.offer == undefined || brunch.offer == 0 || brunch.offer == brunch.price ? "$" + brunch.price : "OFERTA $" + brunch.offer + " precio anterior: $" + brunch.price}
  </p>
  <button type="button" id="decrement-${brunch.id}" class="btn btn-secondary text-light"><i class="fas fa-minus"></i></button>
  <input  value="0" style="border: 0.5px solid rgb(189, 189, 189,0.5);" id="${brunch.id}" type="text" class="col-lg-2 col-3 text-center" style="display: inline; height: 40px" disabled>
  <button type="button"  id="increment-${brunch.id}" class="btn btn-secondary text-light"><i class="fas fa-plus"></i></button>

  <div class="pt-1"><div/>
  <button style=" display: inline" class="btn btn-info text-light" type="button" id="${brunch.id}-btn" disabled>
  Agregar
  </button>
  <button style="width: 90px; display: none" class="btn btn-danger text-light" type="button" id="${brunch.id}-btn-delete">
  <i class="fas fa-trash"></i>
  </button>
  </div>
</div>
</div>

`
    resultado.innerHTML +=htmlBrunch
     ;
    for(let i = 0; i<unicos.length;i++){
      if(brunch.name==unicos[i]){
        //masPedidos.innerHTML +=htmlBrunch
      }
    }
  })
  brunches.forEach(brunch => {
    //let item;
    const deleteItemBtn = document.getElementById(`${brunch.id}-btn-delete`);
    const inputQuantity = document.getElementById(brunch.id);
    const foodBtn = document.getElementById(`${brunch.id}-btn`);
    const incrementBrunch = document.getElementById(`increment-${brunch.id}`) 
    const decrementBrunch = document.getElementById(`decrement-${brunch.id}`) 
    agregarEventos(deleteItemBtn, inputQuantity, foodBtn, brunch,incrementBrunch,decrementBrunch);
  })
}
export function showDrinks(drinksApi) {
  const drinks = drinksApi.map(e => new Bebida(e.name, e.ingredients, e.price, e.offer, e.ml, e.img, e._id));
  let resultado = document.getElementById('bebidas');
  let masPedidos = document.getElementById('masPedidosDrink')
  resultado.innerHTML = "";
  masPedidos.innerHTML = "";
  drinks.forEach(drink => {
    let htmlDrink = `
    <div class="col-sm-4 text-center">
    <div class="pt-5">
      <div class="">
      <img class="img-fluid pr-3" style="width: 200px;" src="${drink.img}" alt="">
      <p class="fw-bold">${drink.name} ${drink.ml}ml</p>
      <p class="fst-italic">${drink.ingredients}<p/>
      <p>
      ${drink.offer == undefined || drink.offer == 0 || drink.offer == drink.price ? "$" + drink.price : "OFERTA $" + drink.offer + " precio anterior: $" + drink.price}
      </p>      
      <button type="button"  id="decrement-${drink.id}" class="btn btn-secondary text-light"><i class="fas fa-minus"></i></button>

      <input  value="0" style="border: 0.5px solid rgb(189, 189, 189,0.5);" id="${drink.id}" type="text" class="col-lg-2 col-3 text-center" style="display: inline; height: 40px" disabled>
      <button type="button"  id="increment-${drink.id}" class="btn btn-secondary text-light"><i class="fas fa-plus"></i></button>

      <div class="pt-1"><div/>
      <button style=" display: inline" class="btn btn-info text-light" type="button" id="${drink.id}-btn" disabled>
      Agregar
      </button>
      <button style="width: 90px; display: none" class="btn btn-danger text-light" type="button" id="${drink.id}-btn-delete">
      <i class="fas fa-trash"></i>
      </button>
      </div>
    </div>
  </div>
    `
    resultado.innerHTML +=htmlDrink;
    for(let i = 0; i<unicos.length;i++){
      if(drink.name==unicos[i]){
        //masPedidos.innerHTML +=htmlDrink
      }
    }
  })
  drinks.forEach(drink => {
    const deleteItemBtn = document.getElementById(`${drink.id}-btn-delete`);
    const inputQuantity = document.getElementById(drink.id);
    const foodBtn = document.getElementById(`${drink.id}-btn`);
    const incrementDrink = document.getElementById(`increment-${drink.id}`) 
    const decrementDrink = document.getElementById(`decrement-${drink.id}`) 
    agregarEventos(deleteItemBtn, inputQuantity, foodBtn, drink,incrementDrink,decrementDrink);
  })
}
export function showDesserts(dessertsApi) {
  const desserts = dessertsApi.map(e => new Dulces(e.name, e.ingredients, e.price, e.offer, e.portion, e.img, e._id))
  let resultado = document.getElementById('dulces');
  let masPedidos = document.getElementById('masPedidosDessert');
  masPedidos.innerHTML = "";
  resultado.innerHTML = "";
  desserts.forEach(dessert => {
    let htmlDessert = `
    <div class="col-sm-4 text-center">
    <div class="pt-5">
      <div class="">
      <img class="img-fluid pr-3" style="width: 180px;" src="${dessert.img}" alt="">
      <p class="fw-bold">${dessert.name} ${dessert.portion} porcion</p>
      <p class="fst-italic">${dessert.ingredients}<p/>
      <p>
      ${dessert.offer == undefined || dessert.offer == 0 || dessert.offer == dessert.price ? "$" + dessert.price : "OFERTA $" + dessert.offer + " precio anterior: $" + dessert.price}
      </p>
      <button type="button"  id="decrement-${dessert.id}" class="btn btn-secondary text-light"><i class="fas fa-minus"></i></button>
      <input  value="0" style="border: 0.5px solid rgb(189, 189, 189,0.5);" id="${dessert.id}" type="text" class="col-lg-2 col-3 text-center" style="display: inline; height: 40px" disabled>
      <button type="button"  id="increment-${dessert.id}" class="btn btn-secondary text-light"><i class="fas fa-plus"></i></button>
      <div class="pt-1"><div/>
      <button style=" display: inline" class="btn btn-info text-light" type="button" id="${dessert.id}-btn" disabled>
      Agregar
      </button>
      <button style="width: 90px; display: none" class="btn btn-danger text-light" type="button" id="${dessert.id}-btn-delete">
      <i class="fas fa-trash"></i>
      </button>
      </div>
    </div>
  </div>
    `

    resultado.innerHTML += htmlDessert;
    for(let i = 0; i<unicos.length;i++){
      if(dessert.name==unicos[i]){
        masPedidos.innerHTML +=htmlDessert
      }
    }
     
  })
  desserts.forEach(dessert => {
    const deleteItemBtn = document.getElementById(`${dessert.id}-btn-delete`);
    const inputQuantity = document.getElementById(dessert.id);
    const foodBtn = document.getElementById(`${dessert.id}-btn`);
    const incrementDessert = document.getElementById(`increment-${dessert.id}`) 
    const decrementDessert = document.getElementById(`decrement-${dessert.id}`) 
    agregarEventos(deleteItemBtn, inputQuantity, foodBtn, dessert,incrementDessert,decrementDessert);


  })


}
function agregarEventos(deleteItemBtn, inputQuantity, foodBtn, food,incrementBtn,decrementBtn) {
  let item;
  let inputValue = parseFloat(inputQuantity.value);
  let totalPrice = food.offer ? food.offer * inputValue : food.price * inputValue;
    item = new ItemPedido(inputQuantity.value, food.id, food.name, totalPrice, food.offer);
  //inputQuantity.addEventListener('change', e => { foodBtn.disabled = false })
  foodBtn.addEventListener('click', e => {
    item.total = food.offer ? food.offer * parseFloat(inputQuantity.value) : food.price * parseFloat(inputQuantity.value);
    pedido.guardarItem(item);
    foodBtn.innerText = "Actualizar";
    foodBtn.setAttribute("class","btn btn-warning text-light")
    //inputQuantity.style.display = "none"
    deleteItemBtn.style.display = "inline"
    console.log(pedido.items);
  });
  deleteItemBtn.addEventListener('click', e => {
    inputQuantity.style.display = "inline"
    foodBtn.style.display = "inline";
    deleteItemBtn.style.display = "none";
    foodBtn.disabled = true;
    inputQuantity.value = "0";
    item.quantity = 0;
    pedido.eliminarItems(item);
    console.log(pedido.items);
    foodBtn.innerText = "Agregar";
    foodBtn.setAttribute("class","btn btn-info text-light")

  })
  incrementBtn.addEventListener('click', e =>{
    item.increment();
    inputQuantity.value = item.quantity;
    if(inputQuantity.value>0){
      foodBtn.disabled = false 
    }
  })
  decrementBtn.addEventListener('click', e =>{
    item.decrement();
    inputQuantity.value = item.quantity;
    if(inputQuantity.value>0){
      foodBtn.disabled = false 
    }
  }) 

}
