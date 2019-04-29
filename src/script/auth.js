// const signupForm = document.querySelector("#signup-form");
// signupForm.addEventListener("submit", e => {
//   e.preventDefault();

//   const email = signupForm["signup-email"].value;
//   const password = signupForm["signup-password"].value;

//   console.log(email, password);
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred.user);

//     var name = cred.user.displayName;
//     var uid = cred.user.uid;
//     var email = cred.user.email;

//     db.collection("users")
//       .doc(uid)
//       .set({
//         email: email,
//         name: name
//       });

//     const modal = document.querySelector("#modal-signup");
//     M.Modal.getInstance(modal).close();
//     signupForm.reset();
//   });
// });

// const loginForm = document.querySelector("#login-form");
// loginForm.addEventListener("submit", e => {
//   e.preventDefault();
//   const email = loginForm["login-email"].value;
//   const password = loginForm["login-password"].value;
//   console.log(email, password);
//   auth.signInWithEmailAndPassword(email, password).then(cred => {
//     console.log(cred.user);

//     const modal = document.querySelector("#modal-login");
//     M.Modal.getInstance(modal).close();
//     loginForm.reset();
//   });
// });

// const outLogin = document.querySelector("#logout");
// outLogin.addEventListener("click", e => {
//   firebase
//     .auth()
//     .signOut()
//     .then(function() {
//       console.log("signOut treu");
//     })
//     .catch(function(error) {
//       console.log("signOut false");
//     });
// });
