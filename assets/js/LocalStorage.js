 class Usuario{
    nombre= document.getElementById('nombre').value;
    numero= document.getElementById('numero').value;
    email= document.getElementById('exampleInputEmail1').value;
}

//intento 4//
let i=0;
function local(){
var users = [];
cliente=new Usuario();
users[i] = cliente;
localStorage.setItem(`usuario${i}`, JSON.stringify(users));
let usuariosGuardados = JSON.parse(localStorage.getItem(`usuario`));
i++;
}

//intento 3//
/*function local(){
let usuarios={
    nombre: document.getElementById('nombre').value,
    numero: document.getElementById('numero').value,
    email: document.getElementById('exampleInputEmail1').value
}

localStorage.setItem('datos', JSON.stringify(usuarios));
let guardado = localStorage.getItem('datos');
console.log('Usuarios: ', JSON.parse(guardado));

}*/
//intento 2//
/*function localStorage(){
    let n=document.getElementById('nombre');
    localStorage.setItem("nombre", n.value);
    let item1=localStorage.getItem("nombre");
    ///
    nro=document.getElementById('numero');
    localStorage.setItem("numero", nro.value);
    let item2=localStorage.getItem("numero");
    ///
    e=document.getElementById('exampleInputEmail1');
    localStorage.setItem("email", nro.value);
    let item3=localStorage.getItem("exampleInputEmail1");


}*/

//intento 1//
   /* let usuarios = [];
    // example {id:1592304983049, title: 'Deadpool', year: 2015}
    const agregarUsuario = (ev)=>{
        ev.preventDefault();  //to stop the form submitting
        let usuario = {
            nombre: document.getElementById('nombre').value,
            mesa: document.getElementById('numero').value,
            email: document.getElementById('exampleInputEmail1').value
        }
        usuarios.push(usuario);
        document.forms[0].reset(); // to clear the form for the next entries
        //document.querySelector('form').reset();

        //for display purposes only
        console.warn('added' , {usuarios} );
 

        //saving to localStorage
        localStorage.setItem('usuarios', JSON.stringify(usuarios) );
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('botonprueba').addEventListener('click', agregarUsuario);
    });*/

