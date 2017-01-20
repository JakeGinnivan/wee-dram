```
  const app = mount(<App />)
  
  const input = app.find('#searchBox')
  input.simulate('change', { target: { value: 'glen' }})

  await wait(800)

  expect(app.find('span').text()).toBe('Glenmorangie Signet')
```