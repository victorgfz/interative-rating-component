const dataRatingValues = Array.from(document.querySelectorAll('[data-rating="value"]'))
const btnSubmit = document.querySelector('[data-rating="submit"]')
const cardReview = document.querySelector('.review')
const cardThankyou = document.querySelector('.thankyou')
const ratingResult = document.querySelector('[data-rating="result"]')

function selectRating(event) {

    const valueSelected = event.currentTarget

    dataRatingValues.forEach((value) => value.classList.remove('active'))
    valueSelected.classList.add('active')
}

dataRatingValues.forEach((value) => {
    value.addEventListener('click', selectRating)
})

function verifyRating(event) {
    event.preventDefault()
    const hasActiveMap = dataRatingValues.map((value) => {

        if (value.classList.contains('active')) {
            ratingResult.innerText = value.innerText
            return true
        } else {
            return false
        }
    }
    )
    const hasActiveReduce = hasActiveMap.reduce((acc, item) => acc === !item, false)
    submitRating(hasActiveReduce)
}

function submitRating(result) {
    if (result) {
        cardReview.classList.add('hide-down')
        setTimeout(() => cardReview.style.display = 'none', 400)
        setTimeout(() => {
            cardThankyou.style.display = 'flex'
            cardThankyou.classList.add('show-up')
        }, 400)
    }
}

btnSubmit.addEventListener('click', verifyRating)