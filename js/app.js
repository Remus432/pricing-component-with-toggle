const toggleCircle = document.querySelector(".pricing__toggle-btn-circle")
const toggleBtn = document.querySelector(".pricing__toggle-btn input")

const firstPrice = document.querySelector(".first-price")
const secondPrice = document.querySelector(".second-price")
const thirdPrice = document.querySelector(".third-price")

toggleBtn.addEventListener("change", switchPricing)

const monthlyPricing = ["19.99", "24.99", "39.99"]
const annuallyPricing = ["199.99", "249.99", "399.99"]

function switchPricing(e) {
  console.log(e)
  if (e.target.checked) {
    toggleCircle.classList.replace("off", "on")
    firstPrice.textContent = annuallyPricing[0]
    secondPrice.textContent = annuallyPricing[1]
    thirdPrice.textContent = annuallyPricing[2]
  } else {
    toggleCircle.classList.replace("on", "off")
    firstPrice.textContent = monthlyPricing[0]
    secondPrice.textContent = monthlyPricing[1]
    thirdPrice.textContent = monthlyPricing[2]
  }
}