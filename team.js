
let member_data = JSON.parse(localStorage.getItem("userdata"));

member_data.forEach(element => {

let body = document.querySelector("tbody");
let row = document.createElement("tr");
row.style.fontSize="17px";
let checkbox = document.createElement("td");

let cb = document.createElement("input");
cb.style.type = "checkbox";
cb.setAttribute("class","cb2");

let name = document.createElement("td");
name.innerText = element.name;

let activity = document.createElement("td");
let act = document.createElement("a");
activity.innerText = "View Activity";
activity.style.cursor="pointer";
activity.style.color = "#0368ab";

let email = document.createElement("td");
email.innerText = element.email;
let labor = document.createElement("td");
labor.innerText = element.labor;
let bill = document.createElement("td");
bill.innerText = element.bill;
let role = document.createElement("td");
role.innerText = "Admin";
let status = document.createElement("td");
status.innerText = "pending/completed";
let action = document.createElement("td");
action.innerText = "Delete";

activity.append(act);
row.append(checkbox, name, activity, email, labor, bill, role, status, action);
body.append(row);

});


let userinfoas = JSON.parse(localStorage.getItem("userDetails"));

// setTimeout(() => {
let mainaccordin = document.getElementsByClassName("conBoxes");

for (i = 0; i < mainaccordin.length; i++) {
  mainaccordin[i].addEventListener("click", function () {
    this.classList.toggle("active");
    //   this.style.color ="blue"|| "black"
  });
}
// }, 2000);

if (userinfoas === null) {
  window.location.href = "../signup.html";
} else {
  let nameprofile = document.getElementById("name-profile");
  nameprofile.innerText = userinfoas["fullname"];
}

let profile = () => {
  window.location.href = "../profile.html";
};

let profileSignout = () => {
  localStorage.removeItem("userDetails");
  window.location.href = "../signup.html";
};
