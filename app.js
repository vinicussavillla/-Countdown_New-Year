
const secoundsContainer = document.querySelector(`#seconds`)
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')

const nextYear = new Date().getFullYear() + 1

const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)


const updateCountdown = () => {
    const correntTime = new Date()
    const difference = newYearTime - correntTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)
    const hours  = Math.floor(difference / 1000 / 60 / 60) % 24
    const minutes  = Math.floor(difference / 1000 / 60) % 60
    const secounds  = Math.floor(difference / 1000) % 60

    secoundsContainer.textContent = secounds < 10 ? '0' + secounds : secounds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days < 10 ? '0' + days : days 
    
  
}

setInterval(updateCountdown, 1000) 
 
