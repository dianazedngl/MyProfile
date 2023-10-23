
// //document.getElementById("myForm").addEventListener("submit", function (e) {
// document.getElementById("myForm").addEventListener("submit", function (e) {


//   e.preventDefault();
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const formData = {
//     name,
//     email,
//   };
//   //const formData = new FormData(this);

//   fetch('https://18uj3cpxzg.execute-api.us-east-1.amazonaws.com/dev/contact', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//       alert('Form data sent to Lambda');
//     })
//     .catch(error => {
//       console.error(error);
//       alert('Error sending form data to Lambda');
//     });

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const formData = {
    name,
    email,
  };
  //const formData = new FormData(this);

  fetch('https://bcpw5ru8bb.execute-api.us-east-1.amazonaws.com/v1/contact', {
    //'https://18uj3cpxzg.execute-api.us-east-1.amazonaws.com/dev/contact', {
    method: 'POST',
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent!");
    console.log(data);
    // Handle the response as needed
  })
  .catch(error => {
    alert("Message not sent!");
    console.error(error);
    // Handle errors
  });
});


// });
