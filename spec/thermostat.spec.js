const Thermostat = require('./../src/Thermostat.js')

describe('Thermostat Tests', function () {
  let thermostat = new Thermostat()
  let result
  beforeEach(function () {
    thermostat = new Thermostat()
    result = 0
  })
  it('Check default temperature', function () {
    result = thermostat.checkTemperature()
    expect(result).toEqual(20)
  })
  it('Check the temperature increases', function () {
    result = thermostat.increaseTemperature()
    expect(result).toEqual(thermostat.checkTemperature())
  })
  it('Check the temperature decreases', function () {
    result = thermostat.decreaseTemperature()
    expect(result).toEqual(19)
  })
  it('Check the temperature minimum', function () {
    result = thermostat.decreaseTemperature(15)
    expect(result).toEqual(10)
  })
  it('Check the temperature can be reset to 20', function () {
    thermostat.increaseTemperature(15)
    result = thermostat.reset()
    expect(result).toEqual(20)
  })
  it('Test to see if powersaving is on', function () {
    result = thermostat.increaseTemperature(30)
    expect(result).toEqual(25)
  })
  it('Test to see if powersaving is off', function () {
    result = thermostat.increaseTemperature(30)
    expect(result).toEqual(25)
  })
  it('Test to see if powerSaving is off', function () {
    thermostat.turnOff()
    result = thermostat.increaseTemperature(30)
    expect(result).toEqual(32)
  })
  it('Test to see low current usage', function () {
    thermostat.decreaseTemperature(4)

    result = thermostat.currentUsage()
    expect(result).toEqual('<font color="green">low usage</font>')
  })
  it('Test to see medium current usage', function () {
    result = thermostat.currentUsage()
    expect(result).toEqual('<font color="black">medium usage</font>')
  })
  it('Test to see high current usage', function () {
    thermostat.turnOff()
    thermostat.increaseTemperature(8)
    result = thermostat.currentUsage()
    expect(result).toEqual('<font color="red">high usage</font>')
  })
  it('Test to see if powerSaving is off', function () {
    thermostat.turnOff()
    result = thermostat.increaseTemperature(30)
    expect(result).toEqual(32)
  })
})
