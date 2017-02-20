import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import fetchMock from 'fetch-mock'
import intercept from 'intercept-stdout'

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}
const unmatchedCalls = []
let unhookIntercept

beforeEach(function() {
    unhookIntercept = intercept(log => {
        if (log.match(/unmatched/i)) { unmatchedCalls.push(log) }
        return log
    })
})

afterEach(function () {
    if (unmatchedCalls.length > 0) {
        throw new Error(`Unmatched http calls:\n${unmatchedCalls.join('\r\n')}`)
    }
})

it('can search for whisky', async () => {
  // Arrange
  fetchMock.get('http://localhost:3001/whiskys?q=glen', [
    {"id":99901,"name":"Glenmorangie Signet","region":""}
  ])
  const app = mount(<App />)
  
  // Act
  const input = app.find('#searchBox')
  input.simulate('change', { target: { value: 'glenm' }})
  await wait(800)

  // Assert
  expect(app.find('span').text()).toBe('Glenmorangie Signet')
})
