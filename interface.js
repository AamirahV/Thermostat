window.addEventListener('load', function() {
    const thermostat = new Thermostat()
    // add a <button> element to your html with id of 'button'
    const buttonIncrease = document.getElementById("increaseTemp")
    const buttonDecrease = document.getElementById("decreaseTemp")
    const resetTemp = document.getElementById("resetTemp")
    // add a <span> element to your html with id of 'message'
    const message = document.getElementById("message")
    message.innerText = thermostat.checkTemperature()
  
    buttonIncrease.addEventListener('click', function() {
      // when the click event happens, update the `innerText` of the message element
      // to display the updated temperature
      message.innerText = thermostat.increaseTemperature()
  
    })
    buttonDecrease.addEventListener('click', function() {
      message.innerText = thermostat.decreaseTemperature()
    
    })
    resetTemp.addEventListener("click", function () {
        message.innerText = thermostat.reset()


    })

  })