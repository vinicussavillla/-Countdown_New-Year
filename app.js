
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
 var now = new Date();
      var today = now.getDay();
      var startTime = new Date();
      startTime.setHours(00);
      startTime.setMinutes(00);
      startTime.setSeconds(00);
      var endTime = new Date();
      endTime.setHours(09);
      endTime.setMinutes(00);
      endTime.setSeconds(00);
      var on = '<video src="">';
      var off = '<img src="">';


      if ((today > 0) && (today < 6) && (now > startTime) && (now < endTime))
      {document.write(on);}
      else
      {document.write(off);}

setInterval(updateCountdown, 1000)

dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
monName = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
now = new Date
document.write ("<h3> Hoje é " + dayName[now.getDay() ] + ", " + now.getDate () + " de " + monName [now.getMonth() ]   +  " de "  +     now.getFullYear () + ". </h1>")
