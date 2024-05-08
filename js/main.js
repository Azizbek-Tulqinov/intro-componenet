let form = document.querySelector("form");
let formData = document.querySelectorAll("input");

function valedataError(element, text) {
  element.classList.add("error");
  element.nextElementSibling.innerHTML = text;
}
function valedataTrue(element) {
  element.classList.add("direct");
  element.nextElementSibling.innerHTML = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let formDataValue = [];

  if (formData[0].value.length < 3) {
    valedataError(formData[0], "First Name cannot be empty");
    formDataValue.push(false);
  } else {
    valedataTrue(formData[0]);
    formDataValue.push(true);
  }

  if (formData[1].value.length < 3) {
    valedataError(formData[1], "Last Name cannot be empty");
    formDataValue.push(false);
  } else {
    valedataTrue(formData[1]);
    formDataValue.push(true);
  }
  if (!formData[2].value.includes("@")) {
    valedataError(formData[2], "Looks like this is not an email");
    formDataValue.push(false);
  } else {
    valedataTrue(formData[2]);
    formDataValue.push(true);
  }
  if (formData[3].value.length < 8) {
    valedataError(formData[3], "Password cannot be empty");
    formDataValue.push(false);
  } else {
    valedataTrue(formData[3]);
    formDataValue.push(true);
  }

  let userData = {
    firstName: formData[0].value,
    lastName: formData[1].value,
    email: formData[2].value,
    password: formData[3].value,
  };
  let newData = formDataValue.every((item) => item);
  console.log(newData ? userData : {});
});

// let password = document.querySelector("#password"),
//   btn = document.querySelector(".eye");

// btn.addEventListener("click", () => {
//   if (password.type == "password") {
//     password.type = "text";
//     btn.innerHTML = "🙉";
//   } else {
//     password.type = "password";
//     btn.innerHTML = "🙈";
//   }
// });
