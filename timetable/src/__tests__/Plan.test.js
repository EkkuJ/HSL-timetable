import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './../components/App'

test ('Plan fetches data and displays it', async () => {
  const { queryAllByText, queryAllByTestId } = render(
    <App />
  )
  await waitForElement(() => queryAllByText('min'))
  expect(queryAllByTestId('duration')).toBeInTheDocument
})
