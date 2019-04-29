// const guideList = document.querySelector(".guides");

// const setupGuides = data => {
//   if (data.length) {
//     let html = "";
//     data.forEach(doc => {
//       const guide = doc.data();
//       const li = `
//       <li>
//         <div class="collapsible-header grey lighten-4">${guide.title}</div>
//         <div class="collapsible-body white">${guide.content}</div>
//       </li>
//       `;
//       html += li;
//     });

//     guideList.innerHTML = html;
//   } else {
//     guideList.innerHTML = `<h5 class="center-align">Login to view guides</h5>`;
//   }
// };

// auth.onAuthStateChanged(user => {
//   if (user) {
//     user.getIdTokenResult().then(idTokenResult => {
//       console.log(idTokenResult.claims.admin);
//       user.admin = idTokenResult.claims.admin;
//       setupIU(user);
//     });

//     db.collection("guides").onSnapshot(
//       snapshot => {
//         setupGuides(snapshot.docs);
//       },
//       err => {
//         console.log("err.message");
//         console.log(err.message);
//       }
//     );

//     // ...
//   } else {
//     // User is signed out.
//     setupGuides([]);
//     setupIU();
//     console.log("checkLogin false");
//   }
// });

// const createForm = document.querySelector("#create-form");
// createForm.addEventListener("submit", e => {
//   e.preventDefault();
//   db.collection("guides")
//     .add({
//       title: createForm["title"].value,
//       content: createForm["content"].value
//     })
//     .then(() => {
//       const modal = document.querySelector("#modal-create");
//       M.Modal.getInstance(modal).close();
//       createForm.reset();
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// });

// const loggedOutLinks = document.querySelectorAll(".logged-out");
// const loggedInLinks = document.querySelectorAll(".logged-in");
// const accountDetails = document.querySelector(".account-details");
// const adminItems = document.querySelectorAll(".admin");

// const setupIU = user => {
//   if (user) {
//     if (user.admin) {
//       adminItems.forEach(item => (item.style.display = "block"));
//     }
//     db.collection("users")
//       .doc(user.uid)
//       .get()
//       .then(doc => {
//         const html = `
//               <div>Logged in as ${doc.data().email} </div>
//               <div>name is ${doc.data().name} </div>
//               <div class="pink-text">ad ${user.admin ? "Admin" : ""} </div>
//             `;
//         accountDetails.innerHTML = html;
//       });
//     loggedInLinks.forEach(item => (item.style.display = `block`));
//     loggedOutLinks.forEach(item => (item.style.display = `none`));
//   } else {
//     adminItems.forEach(item => (item.style.display = "none"));
//     console.log("adminItems");
//     accountDetails.innerHTML = "";
//     loggedInLinks.forEach(item => (item.style.display = "none"));
//     loggedOutLinks.forEach(item => (item.style.display = "block"));
//   }
// };
