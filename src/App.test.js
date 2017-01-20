import React from 'react'
import App from './App'
import { mount } from 'enzyme'
import fetchMock from 'fetch-mock'

function wait(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout))
}

it('can search for whisky', async () => {
  fetchMock.catch(500)
  fetchMock.get('http://localhost:3001/whiskys?q=glen', [
    {"id":99901,"name":"Glenmorangie Signet","region":""}
  ])
})
