const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
const playButton = document.querySelector(".play")
const stopButton = document.querySelector(".stop")
const plusButton = document.querySelector(".plus")
const minusButton = document.querySelector(".minus")
const forestButton = document.querySelector(".forest-button")
const rainButton = document.querySelector(".rain-button")
const coffeeShopButton = document.querySelector(".coffee-shop-button")
const fireplaceButton = document.querySelector(".fireplace-button")

playButton.addEventListener("click", changeAmbienceButton)

function changeAmbienceButton() {
    this.classList.toggle('selected')
    teste()
}

function teste() {
    console.log(this)
}

forestButton.onclick
rainButton.addEventListener("click", teste)
coffeeShopButton.addEventListener("click", changeAmbienceButton)
fireplaceButton.addEventListener("click", changeAmbienceButton)