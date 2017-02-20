import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import fetchMock from 'fetch-mock'

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

class AppPage {
  constructor() {
    this.app = mount(<App />)
  }

  async searchForWhisky(term) {
    const input = app.find('#searchBox')
    input.simulate('change', { target: { value: term }})

    await wait(800)
  }

  getResults() {
    return this.app.find('span').text()
  }
}

it('can search for whisky', async () => {
  fetchMock.catch(500)
  fetchMock.get('http://localhost:3001/whiskys?q=glen', [
    {"id":99901,"name":"Glenmorangie Signet","region":""}
  ])

  const app = new AppPage()

  app.searchForWhisky('glen')

  const results = app.getResults()

  expect(results).toBe('Glenmorangie Signet')
})
