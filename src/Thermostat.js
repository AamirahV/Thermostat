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
  }

  turnOn () {
    this.powerSaving.turnOn()
  }

  currentUsage () {
    let colouredUsage = ''
    if (this._temperature < 18) {
      colouredUsage = 'low usage'
      return colouredUsage.fontcolor('green')
    } else if (this._temperature <= 25) {
      colouredUsage = 'medium usage'
      return colouredUsage.fontcolor('black')
    } else {
      colouredUsage = 'high usage'
      return colouredUsage.fontcolor('red')
    }
  }
}

// module.exports = Thermostat
