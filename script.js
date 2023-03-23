const homeRowInput = document.querySelector('#home-row')
const submitButton = document.querySelector('.submit')

const homeRowIsValid = (homerow) => {
    const a = homerow.split('')
    for (let i = 0; i < homerow.lenght; i++) {
        if (!(/[a-zA-Z]/).test(a[i])) {
            return false
        }
    }
    return true
}

const checkWords = (language, homerow) => {

}

console.log('this is running')
submitButton.addEventListener('click', () => {
    const homerow = homeRowInput.value
    if (!homeRowIsValid(homerow)) {
        alert('Your home row is not valid, make sure to only enter letters.')
    }
    const wordsNumber = checkWords("en", homerow)
    console.log(wordsNumber)
})

