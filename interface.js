window.addEventListener('load', function() {
    const thermostat = new Thermostat()
    // const powerSaving = new PowerSaving()
    // add a <button> element to your html with id of 'button'
    const buttonIncrease = document.getElementById("increaseTemp")
    const buttonDecrease = document.getElementById("decreaseTemp")
    const resetTemp = document.getElementById("resetTemp")
    const powerSave = document.getElementById("powerSave")
    const currentUsage = document.getElementById("currentUsage")

    // add a <span> element to your html with id of 'message'
    const message = document.getElementById("message")
    message.innerText = thermostat.checkTemperature()
    const current = document.getElementById("current")
    
    buttonIncrease.addEventListener('click', event => {
      // when the click event happens, update the `innerText` of the message element
      // to display the updated temperature
      let timer;
      if (event.detail === 1 )
      {timer = setTimeout(() => {
        message.innerText = thermostat.increaseTemperature()

      },100 
      )}
      else {
        message.innerText = thermostat.increaseTemperature(50)
       }
      
  
    })
    buttonDecrease.addEventListener('click', event => {
      let timer;
      if (event.detail === 1) {
        timer = setTimeout(() => {
          message.innerText = thermostat.decreaseTemperature()
        }, 100)
      }
      else { message.innerText = thermostat.decreaseTemperature(50)}
      
    
    })
    resetTemp.addEventListener("click", function () {
      message.innerText = thermostat.reset()


    })
    powerSave.addEventListener("click", function () {
      console.log(thermostat.getPowerSavingState())
      if (thermostat.getPowerSavingState()  === true){
        console.log(thermostat.getPowerSavingState() )
        thermostat.turnOff()
        console.log(thermostat.getPowerSavingState() )
        
        powerSave.style.background = 'orange'
      }
      else if (thermostat.getPowerSavingState() === false) { 
        console.log("")
        thermostat.turnOn()
        
        powerSave.style.background = 'green'
      }
      else {console.log("catcher for null")}
            

    })
    currentUsage.addEventListener("click", function() {
      current.innerText = thermostat.currentUsage()
      
      


    })


  })