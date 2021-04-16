import { pedido } from "../js/endpointComidas.js"
const form = document.getElementById('my-form')
const nombre = document.getElementById('nombre')
const number = document.getElementById('numero')
//const email = document.getElementById('exampleInputEmail1')










export function postPedido() {
    
auth.onAuthStateChanged((user) => {
    var user = firebase.auth().currentUser;

    var  email,emailVerified;

    if (user) {
        //name = user.displayName;
        email = user.email;
        //emailVerified = user.emailVerified;
    //console.log(emailVerified);

    form.addEventListener('submit', e => {
        e.preventDefault();
        fetch('http://localhost:8000/api/order', {
            method: "POST",
            body: JSON.stringify({
                name: nombre.value,
                number: number.value,
                email: email,
                items: pedido.items
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                console.log(res);
                console.log("primera promesa");
                return res.json()
            })
            .then(res => {
                console.log(res);
                form.reset();
                document.getElementById('order').innerHTML = "";
                document.getElementById('precioTotal').innerHTML = "";
                let boton = document.getElementById('my-form-button');
                boton.innerHTML = "¡Pedido enviado!";
                boton.disabled = true;

            })
            .catch(error => {
                console.log(error);

            })
    })
}
})
}
//agregar .then() res.json()