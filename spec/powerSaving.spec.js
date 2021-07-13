const PowerSaving = require('./../src/powerSaving.js')

describe('PowerSave Tests', function () {
  let powerSaving = new PowerSaving()
  let result
  beforeEach(function () {
    powerSaving = new PowerSaving()
    result = 0
  })

  it('Check default state', function () {
    result = powerSaving.checkState()
    expect(result).toEqual(true)
  })

  it('Check it turns off', function () {
    result = powerSaving.turnOff()
    expect(result).toEqual(false)
  })
  it('Check it can turn off then on', function () {
    powerSaving.turnOff()
    result = powerSaving.turnOn()
    expect(result).toEqual(true)
  })
  it('Check we can get the maximum when PowerSaving is turned on', function () {
    powerSaving.turnOn()
    result = powerSaving.getMaximum()
    expect(result).toEqual(25)
  })
  it('Check we can get the maximum when PowerSaving is turned off', function () {
    powerSaving.turnOff()
    result = powerSaving.getMaximum()
    expect(result).toEqual(32)
  })
})
