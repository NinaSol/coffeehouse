//imprimir comidas
import {showBrunches,showDesserts,showDrinks,pedido} from './endpointComidas.js';
//post pedido
import {postPedido} from './formularioPedido.js'
//firebase
import {firebaseUsers} from './clases/ingresoUsuarios.js';
//post pedido
postPedido();


//firebase
firebaseUsers.auth();
firebaseUsers.signUp();
firebaseUsers.signIn();
firebaseUsers.logOut();
firebaseUsers.googleLogin();
firebaseUsers.prueba();



//imprimir comidas
function getAll(url){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let {drinks,drinksV,brunches,brunchesV,desserts,dessertsV} = JSON.parse(this.responseText);
        showBrunches(brunches)
        showDrinks(drinks)
        showDesserts(desserts)
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
getAll("http://localhost:8000/api/all");

  
  const btnModalPedido = document.getElementById('modalPedido');
  const orderDiv = document.getElementById('order');
  const precioTotal = document.getElementById('precioTotal');
  btnModalPedido.addEventListener('click', e =>{
    let price=0;
    //let offer = 0;
    orderDiv.innerHTML=" ";
    for(let item of pedido.items){
      orderDiv.innerHTML+=`${[item.name]} ${[item.quantity]}<br>`;
      price+=item.total;
     /*  if(item.offer>0){
      offer = item.total-item.offer;
      }else{
        offer = 0;

      } */
console.log(price);

      precioTotal.innerHTML=price;

    }
  ////
  $('#exampleModal').on('hide.bs.modal', function () {
      orderDiv.innerHTML=" ";
      price=0;
    })

});


