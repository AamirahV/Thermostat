class PowerSaving {
  constructor () {
    this.currentState = true
  }

  checkState () {
    return this.currentState
  }

  turnOn () {
    this.currentState = true
    return this.currentState
  }

  turnOff () {
    this.currentState = false
    return this.currentState
  }

  getMaximum () {
    if (this.currentState) {
      return 25
    } else {
      return 32
    }
  }
}

module.exports = PowerSaving
