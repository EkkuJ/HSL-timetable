import React from 'react'
import { render, waitForElement, queryByTestId  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Plan from './../components/Plan'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

test('Plan fetches data and displys it with fixed parameters', async () => {
  const { getAllByText, queryAllByTestId } = render(
    <ApolloProvider client={client}>
      <Plan date="2020-03-30" time="23:00:00"/>
    </ApolloProvider>
  )

  await waitForElement(() => getAllByText('itinerary, duration:'))
  expect(queryAllByTestId('duration')[0]).toBeInTheDocument
  var durationOfFirst = queryAllByTestId('duration')[0].textContent
  expect(durationOfFirst).toEqual("1078")
  
})
