//Set initial count value
let count = 0;

//Select all buttons and select the value
const value = document.getElementById("value");
const btn = document.querySelectorAll(".btn");

btn.forEach((btns) => {
  btns.addEventListener("click", (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#000";
    }
    value.textContent = count;
  });
});
