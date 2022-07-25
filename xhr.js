console.clear();
// event -onload(), onerror()
//property - response, responseText, responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()

// const makeRequest = (method, url, data) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open(method, url);
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = () => {
//     let data = xhr.response;
//     console.log(JSON.parse(data));
//   };

//   xhr.onerror = () => {
//     console.log("error is here");
//   };
//   xhr.send(JSON.stringify(data));
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
// };

// const sendData = () => {
//   makeRequest("POST", "https://jsonplaceholder.typicode.com/posts", {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   });
// };

// const updateData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//     id: 1,
//     title:'foogf',
//     body:'bargf',
//     userId: 1,
//   });
// };

// const updateSingleData = () => {
//   makeRequest("PUT", "https://jsonplaceholder.typicode.com/posts/1", {
//   title: 'this is changed',
   
//   });
// };

// const deleteData = () => {
//   makeRequest("DELETE", "https://jsonplaceholder.typicode.com/posts/1")}

// deleteData();

//promise

// const makeRequest = (method, url, data) => {
//   return new Promise((resolve, reject) => {

//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.setRequestHeader("content-type", "application/json");

//     xhr.onload = () => {
//       let data = xhr.response;
//       console.log(JSON.parse(data));
//     };
  
//     xhr.onerror = () => {
//       console.log("error is here");
//     };

//     xhr.send(JSON.stringify(data));
//   })
// };

// const getData = () => {
//   makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
//   .then((res) => console.log(res))
// };

// getData()


//========================= fetch api =============================

// fetch("https://jsonplaceholder.typicode.com/posts/101")

// .then((res) => {
//   if(!res.ok) {
//     const message = `Error: ${res.status}`
//     throw new Error(message)
//   }
// })
// .then((res) => console.log(res))
// .catch((err) => console.log(err))


//==================web storage api | localStorage, sessionStorage. cookie

// ===========localStorage===========

// web storage api --- allows us to store & read data in browser 
// web storage api --- localStorage, sessionStorage

// localStorage -- store , read , update and remove data
// no expire date: data never gets lost even if you close the browser

// localStorage store data as key value pain -- string
//setItem(key, value)

localStorage.setItem("userName", "Bulbul Ahmed")
localStorage.setItem("password", "01456565687")

const userName =localStorage.getItem("userName")
const userPassword = localStorage.getItem("password")

console.log(userName, userPassword);


localStorage.setItem("userName", "rabeya islam")
 localStorage.setItem("password", "4547154")

//removeItem(key)

localStorage.removeItem("userName")
localStorage.removeItem("password")

const countries = ["Australia","Bangladesh","Nepal"]

localStorage.setItem("countries", JSON.stringify(countries))
localStorage.setItem("password", "014575245")

const country = JSON.parse(localStorage.getItem("countries"))
const pass = localStorage.getItem("password")

console.log(country, pass);



//===========session storage=============





