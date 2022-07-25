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

const makeRequest = (method, url, data) => {
  return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader("content-type", "application/json");

    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };
  
    xhr.onerror = () => {
      console.log("error is here");
    };

    xhr.send(JSON.stringify(data));
  })
};

const getData = () => {
  makeRequest("GET", "https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res))
};

getData()


