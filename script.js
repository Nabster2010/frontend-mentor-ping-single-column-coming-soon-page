const form = document.querySelector("form");
const input = document.querySelector("input");
const errMsg = document.getElementById("errMsg");

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!validateEmail(value)) {
    input.classList.add("border-lightRed");
    errMsg.classList.remove("hidden");
    return;
  } else {
    alert("success");
    input.value = "";
    return;
  }
});
input.addEventListener("focusin", () => {
  errMsg.classList.add("hidden");
});
