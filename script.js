function guestInfo() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email?");
  let header = document.querySelector("h1");
  if (name.length > 0 && email.length > 0) {
    header.innerHTML = "Thank you " + name + "! We 💜 you!";
  } else {
    alert("Sorry, we need your name and email for your pre-order 😞");
  }
}
let orderButton = document.querySelector("button");
orderButton.addEventListener("click", guestInfo);
