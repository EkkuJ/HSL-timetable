import React from 'react'
import ReactDOM from 'react-dom'
import { render, waitForElement, queryAllByTestId  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './../components/App'

it('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})

test('App contains a plan with a valid itinerary durations', async () => {
  const { getAllByText, queryAllByTestId } = render(
    <App />
  )

  await waitForElement(() => getAllByText('itinerary, duration:'))
  expect(queryAllByTestId('duration')).toBeInTheDocument
  var durationOfFirst = queryAllByTestId('duration')[0].textContent
  expect(Number(durationOfFirst)).toBeGreaterThan(0)
})
