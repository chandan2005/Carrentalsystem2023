// Function to handle form submission
function submitForm() {
  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobile-number").value;
  const carType = document.getElementById("car-type").value;
  const carField = document.getElementById("car-field").value;

  // Generate reference number
  const referenceNumber = generateReferenceNumber();

  // Display form data and reference number in alert box
  const message = `Your form has been submitted successfully!\n\nName: ${name}\nEmail: ${email}\nMobile Number: ${mobileNumber}\nType of Car: ${carType}\nCar Field: ${carField}\n\nYour reference number is: ${referenceNumber}`;
  document.getElementById("alert-message").textContent = message;
  document.getElementById(
    "alert-reference-number"
  ).textContent = `Reference Number: ${referenceNumber}`;
  document.getElementById("alert-box").style.display = "block";
}

// Function to generate reference number
function generateReferenceNumber() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let referenceNumber = "";
  for (let i = 0; i < 6; i++) {
    referenceNumber += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return referenceNumber;
}

// Function to show alert box
function showAlert() {
  document.getElementById("alert-box").style.display = "block";
}

function submitForm() {
  // get the form element
  var form = document.getElementById("myForm");

  // create a new div element
  var message = document.createElement("div");

  // set the content of the div element to the message you want to display
  message.innerHTML = "Form submitted successfully!";

  // set the styles for the div element
  message.style.backgroundColor = "#4CAF50";
  message.style.color = "white";
  message.style.padding = "10px";
  message.style.textAlign = "center";
  message.style.position = "fixed";
  message.style.top = "0";
  message.style.left = "50%";
  message.style.transform = "translateX(-50%)";

  // add the div element to the top of the document body
  document.body.insertBefore(message, document.body.firstChild);

  // set a timeout to remove the message after 3 seconds
  setTimeout(function () {
    message.remove();
  }, 3000);

  // submit the form
  form.submit();
}
