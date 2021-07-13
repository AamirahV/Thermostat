// const PowerSaving = require('./PowerSaving.js')

class Thermostat {
  constructor () {
    this._temperature = 20
    this.powerSaving = new PowerSaving()
  }

  checkTemperature () {
    return this._temperature
  }

  increaseTemperature (value = 1) {
    if (this._temperature + value >= this.powerSaving.getMaximum()) {
      this._temperature = this.powerSaving.getMaximum()
    } else {
      this._temperature += value
    }
    return this._temperature
  }

  decreaseTemperature (value = 1) {
    if (this._temperature - value < 10) { this._temperature = 10 } else {
      this._temperature -= value
    }
    return this._temperature
  }

  reset () {
    this._temperature = 20
    return this._temperature
  }

  turnOff () {
    this.powerSaving.turnOff()
    return this.powerSaving.checkState()
  }

  turnOn () {
    this.powerSaving.turnOn()
    return this.powerSaving.checkState()
  }

  getPowerSavingState()
  { 
    return this.powerSaving.checkState()
  }

  currentUsage () {
    let colouredUsage = ''
    if (this._temperature < 18) {
      colouredUsage = 'low usage'
      return colouredUsage.element.style.color('green')
    } else if (this._temperature <= 25) {
      colouredUsage =  'medium usage'
      colouredUsage.fontcolor = "F0F"
      return colouredUsage
    } else {
      colouredUsage=  'high usage'
      return colouredUsage.style.color('red')
    }
  }
}

// module.exports = Thermostat
