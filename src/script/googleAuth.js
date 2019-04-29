// const signinGoogle = document.querySelector(".signin-google");
// signinGoogle.addEventListener("click", e => {
//   e.preventDefault();
//   var provider = new firebase.auth.GoogleAuthProvider();
//   auth.signInWithPopup(provider).then(result => {
//     console.log("result ", result);
//     var name = result.user.displayName;
//     var uid = result.user.uid;
//     var email = result.user.email;

//     db.collection("users")
//       .doc(uid)
//       .set({
//         email: email,
//         name: name
//       });

//     /*  .get()
//       .then(x => {
//         if (x.data()) {
//           console.log("true");
//         } else {
//           db.collection("users")
//             .doc(uid)
//             .set({
//               email: email,
//               name: name
//             });
//         }
//       }); */

//     const modal = document.querySelector("#modal-login");
//     M.Modal.getInstance(modal).close();
//     loginForm.reset();
//   });
// });

// const adminForm = document.querySelector(".admin-actions");
// adminForm.addEventListener("submit", e => {
//   e.preventDefault();
//   const adminEmail = document.querySelector("#admin-email").value;
//   const addAdminrole = functions.httpsCallable("addAdminRole");
//   addAdminrole({ email: adminEmail }).then(result => {
//     console.log(result);
//   });
// });
