// html elements
const promoCodeHeadlineDiv = document.getElementById("promoCodeHeadlineDiv");
const headline = document.getElementById("headline");
const inputDiv = document.getElementById("inputDiv");
const inputClose = document.getElementById("inputClose");

// functions
if (!promoCodeHeadlineDiv.classList.contains("d-none")) {
  promoCodeHeadlineDiv.addEventListener("click", () => {
    if (!promoCodeHeadlineDiv.classList.contains("d-none")) {
      console.log("loooo");
      promoCodeHeadlineDiv.classList.add("d-none");
      inputDiv.classList.remove("d-none");
      inputDiv.classList.add("d-block");
    }
  });
}
inputClose.addEventListener("click", () => {
  console.log("sooooooooooo");
  inputDiv.classList.add("d-none");
  inputDiv.classList.remove("d-block");
  promoCodeHeadlineDiv.classList.remove("d-none");
  promoCodeHeadlineDiv.classList.add("d-block");
});
