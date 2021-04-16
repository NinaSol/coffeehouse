const name = document.getElementById('foodName');
const ingridients = document.getElementById('ingridients');
const price = document.getElementById('price');
const quantity = document.getElementById('quantity');
const img = document.getElementById('foodImg');
const form = document.getElementById('createFood-form');
let type = document.getElementById('selectType');
let offer = document.getElementById('offer')

export function createFood() {
    
    form.addEventListener('submit', e => {

        e.preventDefault();
        fetch(`http://localhost:8000/api/create-${type.value}`, {
            method: "POST",
            body: JSON.stringify({
                name: name.value,
                ingredients: ingridients.value,
                price: price.value,
                offer: offer.value >0 && offer.value<price.value ? offer.value : offer.value,
                quantity: quantity.value,
                ml: quantity.value,
                portion: quantity.value,
                img: img.value
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(res => {
            console.log(res);
            console.log("promesa");
            return res.json()
        })
            .then(res => {
                console.log(res);
                let createBtn = document.getElementById('create-btn');
                createBtn.class = "btn btn-success text-light"
                createBtn.innerHTML = "¡Producto creado!";
            })
            .catch(error => {
                console.log(error);
                let createBtn = document.getElementById('create-btn');
                createBtn.class = "btn btn-danger text-light"
                createBtn.innerHTML = "ERROR";
            })
            document.location.reload()

    })
}

export function foodRequests(url) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let { drinks, desserts, brunches } = JSON.parse(this.responseText);
            let comida = document.getElementById('comida');
            comida.innerHTML = "";
            for (let producto of brunches) {
                comida.innerHTML +=
                    `
                <div class="col-sm pt-5">
                    <img src="${producto.img}" width="150px" />
                    <p>${producto.name}</p>
                    <p>${producto.quantity} unidad</p>
                    <p>
                    ${producto.offer==undefined||producto.offer==0||producto.offer==producto.price? "$"+ producto.price : "OFERTA $"+producto.offer + "precio anterior: $"+producto.price}
                    </p>                    
                    <button id="delete-${producto._id}" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                    <button type="button" id="edit-${producto._id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Bmodal-${producto._id}"><i class="fas fa-edit"></i></button>
                   <!--modal-->
                    <div class="modal fade" id="Bmodal-${producto._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                        <label for="">Nombre</label>
                        <br/>
                        <input type="text" name="Nombre" value="${producto.name}" id="name-${producto._id}">
                        <br/>
                        <label for="">Ingredientes</label>
                        <br/>
                        <input type="text" name="Ingredients" value="${producto.ingredients}" id="ing-${producto._id}">
                        <br/>
                        <label for="">Precio</label>
                        <br/>
                       
                        <input type="number" name="Price" value="${producto.price}" id="price-${producto._id}">
                        <br/>
                        <label for="">Oferta</label>
                        <br/>
                        <input type="number" name="Offer" value="${producto.offer}" id="offer-${producto._id}">
                        <br/>
                        <label for="">Cantidad</label>
                        <br/>
                        <input type="text" name="Quantity" value="${producto.quantity}" id="quant-${producto._id}">
                        <br/>
                        <label for="">Imagen</label>
                        <br/>
                        <input type="text" name="Image" value="${producto.img}" id="img-${producto._id}">


                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" id="save-edit-${producto._id}" class="btn btn-primary">Guardar Cambios</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <!--modal fin-->
                    <div>
                `;
            }
            for (let producto of drinks) {
                comida.innerHTML +=
                    `
                <div class="col-sm pt-5">
                    <img src="${producto.img}" width="150px" />
                    <p>${producto.name}</p>
                    <p>${producto.ml} ml</p>
                    <p>
                    ${producto.offer==undefined||producto.offer==0||producto.offer==producto.price? "$"+ producto.price : "OFERTA $"+producto.offer + "precio anterior: $"+producto.price}
                    </p>    
                    <button id="delete-${producto._id}" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                    <button type="button" id="edit-${producto._id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Bmodal-${producto._id}"><i class="fas fa-edit"></i></button>
                    <!--modal-->
                     <div class="modal fade" id="Bmodal-${producto._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                         <div class="modal-content">
                         <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body">
                         <label for="">Nombre</label>
                         <br/>
                         <input type="text" name="Nombre" value="${producto.name}" id="name-${producto._id}">
                         <br/>
                         <label for="">Ingredientes</label>
                         <br/>
                         <input type="text" name="Ingredients" value="${producto.ingredients}" id="ing-${producto._id}">
                         <br/>
                         <label for="">Precio</label>
                         <br/>
                         <input type="number" name="Price" value="${producto.price}" id="price-${producto._id}">
                         <br/>
                         <label for="">Oferta</label>
                         <br/>
                         <input type="number" name="Offer" value="${producto.offer}" id="offer-${producto._id}">
                         <br/>
                         <label for="">Cantidad</label>
                         <br/>
                         <input type="text" name="Quantity" value="${producto.ml}" id="ml-${producto._id}">
                         <br/>
                         <label for="">Imagen</label>
                         <br/>
                         <input type="text" name="Image" value="${producto.img}" id="img-${producto._id}">
 
 
                         </div>
                         <div class="modal-footer">
                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                             <button type="button" id="save-edit-${producto._id}" class="btn btn-primary">Guardar Cambios</button>
                         </div>
                         </div>
                     </div>
                     </div>
                     <!--modal fin-->

                <div>
                `

            }
            for (let producto of desserts) {
                comida.innerHTML +=
                    `
                <div class="col-sm pt-5">
                    <img src="${producto.img}" width="150px" />
                    <p>${producto.name}</p>
                    <p> ${producto.portion} porcion</p>
                    <p>
                    ${producto.offer==undefined||producto.offer==0||producto.offer==producto.price? "$"+ producto.price : "OFERTA $"+producto.offer + "precio anterior: $"+producto.price}
                    </p>    
                    <button id="delete-${producto._id}" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                    <button type="button" id="edit-${producto._id}" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#Bmodal-${producto._id}"><i class="fas fa-edit"></i></button>
                    <!--modal-->
                     <div class="modal fade" id="Bmodal-${producto._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                     <div class="modal-dialog">
                         <div class="modal-content">
                         <div class="modal-header">
                             <h5 class="modal-title" id="exampleModalLabel">Editar</h5>
                             <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                         <div class="modal-body">
                         <label for="">Nombre</label>
                         <br/>
                         <input type="text" name="Nombre" value="${producto.name}" id="name-${producto._id}">
                         <br/>
                         <label for="">Ingredientes</label>
                         <br/>
                         <input type="text" name="Ingredients" value="${producto.ingredients}" id="ing-${producto._id}">
                         <br/>
                         <label for="">Precio</label>
                         <br/>
                         <input type="number" name="Price" value="${producto.price}" id="price-${producto._id}">
                         <br/>
                         <label for="">Oferta</label>
                         <br/>
                         <input type="number" name="Offer" value="${producto.offer}" id="offer-${producto._id}">
                         <br/>
                         <label for="">Cantidad</label>
                         <br/>
                         <input type="text" name="Quantity" value="${producto.portion}" id="port-${producto._id}">
                         <br/>
                         <label for="">Imagen</label>
                         <br/>
                         <input type="text" name="Image" value="${producto.img}" id="img-${producto._id}">
 
 
                         </div>
                         <div class="modal-footer">
                             <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                             <button type="button" id="save-edit-${producto._id}" class="btn btn-primary">Guardar Cambios</button>
                         </div>
                         </div>
                     </div>
                     </div>
                     <!--modal fin-->
                 <div>
                `

            }
            //delete
            brunches.forEach(producto => {
                let deleteBtn = document.getElementById(`delete-${producto._id}`);
                deleteBtn.addEventListener('click', e => {
                    fetch(`http://localhost:8000/api/delete-brunch/${producto._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.text())
                        .then(res => console.log(res))
                        document.location.reload()

                })
                ////put
                const name = document.getElementById(`name-${producto._id}`)
                const ing = document.getElementById(`ing-${producto._id}`)
                const price = document.getElementById(`price-${producto._id}`)
                const quant = document.getElementById(`quant-${producto._id}`)
                const image = document.getElementById(`img-${producto._id}`)
                const btnEdit = document.getElementById(`save-edit-${producto._id}`);
                const offer =  document.getElementById(`offer-${producto._id}`);
                btnEdit.addEventListener("click", function() { 
                    const newEdit = {
                        name: name.value,
                        ingredients: ing.value,
                        price: price.value,
                        offer: offer.value,
                        quant: quant.value,
                        img: image.value
                    }
                    fetch(`http://localhost:8000/api/update-brunch/${producto._id}`, {
                        method: "PUT",
                        body: JSON.stringify(newEdit),
                        headers: {
                            "content-type": "application/json"
                        }
                    }).then(res =>{ return res.json()}) 
                    .then(res => {console.log(res); btnEdit.innerHTML = "Cambios Guardados con exito"})
                    .catch(error => btnEdit.innerHTML ="Ocurrio un error"+error)
                    document.location.reload()
                   
                })
           
        
                ////

            })
            desserts.forEach(producto => {
                let deleteBtn = document.getElementById(`delete-${producto._id}`);
                deleteBtn.addEventListener('click', e => {
                    fetch(`http://localhost:8000/api/delete-dessert/${producto._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json()) 
                        .then(res => console.log(res))
                        document.location.reload()

                })
                   ////put
                   const name = document.getElementById(`name-${producto._id}`)
                   const ing = document.getElementById(`ing-${producto._id}`)
                   const price = document.getElementById(`price-${producto._id}`)
                   const port = document.getElementById(`port-${producto._id}`)
                   const image = document.getElementById(`img-${producto._id}`)
                   const btnEdit = document.getElementById(`save-edit-${producto._id}`);
                   const offer =  document.getElementById(`offer-${producto._id}`);
                   btnEdit.addEventListener("click", function() { 
                       const newEdit = {
                           name: name.value,
                           ingredients: ing.value,
                           price: price.value,
                           offer: offer.value,
                           port: port.value,
                           img: image.value
                       }
                       fetch(`http://localhost:8000/api/update-dessert/${producto._id}`, {
                           method: "PUT",
                           body: JSON.stringify(newEdit),
                           headers: {
                               "content-type": "application/json"
                           }
                       }).then(res =>{ return res.json()}) 
                       .then(res => {console.log(res); btnEdit.innerHTML = "Cambios Guardados con exito"})
                       .catch(error => btnEdit.innerHTML ="Ocurrio un error"+error)
                       document.location.reload()

                   })
              
           
                   ////
             
            })
            drinks.forEach(producto => {
                let deleteBtn = document.getElementById(`delete-${producto._id}`);
                deleteBtn.addEventListener('click', e => {
                    fetch(`http://localhost:8000/api/delete-drink/${producto._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json()) 
                        .then(res => console.log(res))
                        document.location.reload()

                })
                    ////put
                    const name = document.getElementById(`name-${producto._id}`)
                    const ing = document.getElementById(`ing-${producto._id}`)
                    const price = document.getElementById(`price-${producto._id}`)
                    const ml = document.getElementById(`ml-${producto._id}`)
                    const image = document.getElementById(`img-${producto._id}`)
                    const btnEdit = document.getElementById(`save-edit-${producto._id}`);
                    const offer =  document.getElementById(`offer-${producto._id}`);
                    btnEdit.addEventListener("click", function() { 
                        const newEdit = {
                            name: name.value,
                            ingredients: ing.value,
                            price: price.value,
                            offer: offer.value,
                            ml: ml.value,
                            img: image.value
                        }
                        fetch(`http://localhost:8000/api/update-drink/${producto._id}`, {
                            method: "PUT",
                            body: JSON.stringify(newEdit),
                            headers: {
                                "content-type": "application/json"
                            }
                        }).then(res =>{ return res.json()}) 
                        .then(res => {console.log(res); btnEdit.innerHTML = "Cambios Guardados con exito"})
                        .catch(error => btnEdit.innerHTML ="Ocurrio un error"+error)
                        document.location.reload()

                    })
               
            
                    ////
   
            })
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();



}
