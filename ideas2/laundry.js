let running = false // Running flag

let countdown  // Stores intervalID for use with setInterval

const DEFAULT_MINUTES = 48
const WASHER_MINUTES = 45
const DRYER_MINUTES = 38

const INCREMENT = 5

const btnStart = document.querySelector('#btnStart')
const btnStop = document.querySelector('#btnStop')
const btnReset = document.querySelector('#btnReset')
const btnWasher = document.querySelector('#btnWasher')
const btnDryer = document.querySelector('#btnDryer')
const minutes = document.querySelector('.minute')
const seconds = document.querySelector('.second')
const btnMinus = document.querySelector('#btnMinus')
const btnPlus = document.querySelector('#btnPlus')
const test = document.querySelector('#test')
const setZero = document.querySelector('#setZero')
const setMax = document.querySelector('#setMax')

function startTimer(){
    running = true
    countdown = setInterval(function (){
        if(minutes.innerText === '00' && seconds.innerText === '00'){
            running = false
            return
        }

        let newSecondsTotal = 60*parseInt(minutes.innerText) + parseInt(seconds.innerText) - 1
        let newSecondsPart = '' + (newSecondsTotal % 60)
        let newMinutesPart = '' + ((newSecondsTotal - newSecondsPart)/60)
        seconds.innerText = newSecondsPart.padStart(2,'0')
        minutes.innerText = newMinutesPart.padStart(2,'0')
    },1000)
}

function setDefault(){
    minutes.innerText = ('' + DEFAULT_MINUTES).padStart(2,'0')
    seconds.innerText = '00'
}
setDefault()

function stopTimer(){
    console.log('Timer should stop')
    running = false
    clearInterval(countdown)
}

btnStart.addEventListener('click',()=>{
    startTimer()
})

btnStop.addEventListener('click',()=>{
    stopTimer()
})
btnReset.addEventListener('click',()=>{
    stopTimer()
    setDefault()
})

btnWasher.addEventListener('click',()=>{
    stopTimer()
    minutes.innerText = ('' + WASHER_MINUTES).padStart(2,'0')
    seconds.innerText = '00'
})

btnDryer.addEventListener('click',()=>{
    stopTimer()
    minutes.innerText = ('' + DRYER_MINUTES).padStart(2,'0')
    seconds.innerText = '00'
})

btnPlus.addEventListener('click',()=>{
    stopTimer()

    const curSeconds = parseInt(seconds.innerText)

    // Adding 5 seconds puts it at or above the maximum
    if(curSeconds >= (60-INCREMENT) && minutes.innerText === '99'){
        seconds.innerText = '59'
        return
    }

    const newSeconds = parseInt(seconds.innerText) + INCREMENT

    if(newSeconds >= 60){
        const newMinutes = '' + (parseInt(minutes.innerText) + 1)
        const newSecondsPart = '' + (newSeconds - 60)
        minutes.innerText = newMinutes.padStart(2,'0')
        seconds.innerText = newSecondsPart.padStart(2,'0')
    }
    else
        seconds.innerText = ('' + newSeconds).padStart(2,'0')
})

btnMinus.addEventListener('click',()=>{
    stopTimer()

    const curSeconds = parseInt(seconds.innerText)
    const curMinutes = parseInt(minutes.innerText)

    if(curSeconds < INCREMENT && curMinutes === 0){
        seconds.innerText = '00'
        return
    }

    let newSeconds
    if(curSeconds < INCREMENT){
        const newMinutes = parseInt(minutes.innerText) - 1
        minutes.innerText = ('' + newMinutes).padStart(2,'0')
        newSeconds = 60 + curSeconds - 5
    }
    else
        newSeconds = curSeconds - 5
    
        seconds.innerText = ('' + newSeconds).padStart(2,'0')
})

setZero.addEventListener('click',()=>{
    stopTimer()
    minutes.innerText = '00'
    seconds.innerText = '00'
})

setMax.addEventListener('click',()=>{
    stopTimer()
    minutes.innerText = '99'
    seconds.innerText = '59'
})