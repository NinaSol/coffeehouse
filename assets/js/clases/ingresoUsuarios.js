
class CrearUsuario {
  constructor() {

  }
  signUp() {
    const signUpForm = document.querySelector("#signup-form");
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = signUpForm["signup-email"].value;
      const password = signUpForm["signup-password"].value;

      // Authenticate the User
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // clear the form
          signUpForm.reset();
          // close the modal
          $("#signupModal").modal("hide");
          console.log('sign up exitoso');
        });

    });
  }
  signIn() {
    const signInForm = document.querySelector("#login-form");

    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = signInForm["login-email"].value;
      const password = signInForm["login-password"].value;
      // Authenticate the User
      auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
        console.log(email);

        // clear the form
        signInForm.reset();
        // close the modal
        $("#signinModal").modal("hide");
        console.log('sign in exitoso');
        // Handle Errors here.

      })

    });


  }
  logOut() {
    const logout = document.querySelector("#logout");

    logout.addEventListener("click", (e) => {

      e.preventDefault();
      auth.signOut().then(() => {
        console.log("sesion cerrada");
        document.location.reload();

      });
    });
  }
  auth() {
    auth.onAuthStateChanged((user) => {
      let modalPedidoBtn = document.getElementById('modalPedido');
      let createUser = document.getElementById('create-user');
      let signIn = document.getElementById('sign-in')
      let logoutBtn = document.getElementById('logout')
      if (user) {
        console.log('auth: sign in');
        signIn.style.display = "none"
        createUser.style.display = "none"
        logoutBtn.style.display = "block"
        modalPedidoBtn.innerHTML = "¡Hacer Pedido!"
        modalPedidoBtn.disabled = false
        auth.onAuthStateChanged((user) => {
          var  user = firebase.auth().currentUser;
        
            var name, email, photoUrl, uid, emailVerified;
        
            if (user) {
              name = user.displayName;
              email = user.email;
              photoUrl = user.photoURL;
              emailVerified = user.emailVerified;
              uid = user.uid;
              document.getElementById('user-name').innerHTML = name;
              document.getElementById('user-img').src = photoUrl;
        
        
            }
          })

      } else {
        console.log('auth: sign out');
        modalPedidoBtn.innerHTML = "¡inicia sesion para realizar un pedido!"
        modalPedidoBtn.disabled = true
        logoutBtn.style.display = "none"

      }

      //

    })
  }

  googleLogin() {
    const signInForm = document.querySelector("#login-form");
    const googleButton = document.querySelector("#googleLogin");

    googleButton.addEventListener("click", (e) => {
      e.preventDefault();
      signInForm.reset();
      $("#signinModal").modal("hide");

      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then((result) => {
        console.log(result);
        console.log("google sign in");
      })
        .catch(err => {
          console.log(err);
        })
    });

  }
  prueba(){

  }

  
}



export let firebaseUsers = new CrearUsuario();