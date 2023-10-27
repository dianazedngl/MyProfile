

document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const formData = {
    name,
    email,
  };
  

  fetch('https://bcpw5ru8bb.execute-api.us-east-1.amazonaws.com/v1/contact', {
    
    method: 'POST',
    body: JSON.stringify(formData),
  })
  .then(response => response.json())
  .then(data => {
    alert("Message sent!");
    console.log(data);

  })
  .catch(error => {
    alert("Message not sent!");
    console.error(error);
    
  });
});


// });
