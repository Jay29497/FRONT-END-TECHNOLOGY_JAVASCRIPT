function validate(event) {
  event.preventDefault();

  // FULL NAME
  let name = document.getElementById("name").value;
  let status = document.getElementById("status");

  if (name.length === 0) {
    status.innerHTML = "Name field cannot be empty";
    status.style.color = "red";
  } else {
    if (name.length <= 5) {
      status.innerHTML = "Please Enter Valid User Name";
      status.style.color = "red";
    } else {
      status.innerHTML = "";
      status.style.color = "";
    }
  }

  // EMAIL ID
  let email = document.getElementById("email").value;
  let regex = /^\S+@\S+\.\S+$/;

  if (email.length === 0) {
    status1.innerHTML = "Email field cannot be empty";
    status1.style.color = "red";
  } else {
    if (regex.test(email) === false) {
      status1.innerHTML = "Invalid Email";
      status1.style.color = "red";
    } else {
      status1.innerText = "";
      status1.style.color = "";
    }
  }

  // MOBILE NUM
  let mobile = document.getElementById("mobile").value;
  let regex1 = /^[6-9]\d{9}$/;

  if (mobile.length === 0) {
    status2.innerHTML = "Mobile field cannot be empty";
    status2.style.color = "red";
  } else {
    if (regex1.test(mobile) === false) {
      status2.innerHTML = "Invalid Mobile Number";
      status2.style.color = "red";
    } else {
      status2.innerText = "";
      status2.style.color = "";
    }
  }

  // CITY
  let city = document.getElementById("city").value;
  if (city) {
    status3.innerHTML = "Please select city name";
    status3.style.color = "red";
  } else {
    status3.innerHTML = "";
    status3.style.color = "";
  }

  // GENDER
  let radio = "";
  const len = document.cForm.gender.length;

  for (i = 0; i < len; i++) {
    if (document.cForm.gender[i].checked) {
      radio = document.cForm.gender[i].value;
    }
  }

  if (radio == "") {
    status4.innerHTML = "Please select gender";
    status4.style.color = "red";
  } else {
    status4.innerHTML = "";
    status4.style.color = "";
  }

  // LANGUAGE
  let checkbox = "";
  const leng = document.cForm.lang.length;

  for (i = 0; i < leng; i++) {
    if (document.cForm.lang[i].checked) {
      checkbox = document.cForm.lang[i].value;
    }
  }

  if (checkbox == "") {
    status5.innerHTML = "Please select language";
    status5.style.color = "red";
  } else {
    status5.innerHTML = "";
    status5.style.color = "";
  }
}
