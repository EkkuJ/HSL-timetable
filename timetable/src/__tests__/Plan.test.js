import React from 'react'
import { render, waitForElement  } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Plan from './../components/Plan'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

test('Plan fetches data and displys it', async () => {
  const { getAllByText, queryAllByTestId } = render(
    <ApolloProvider client={client}>
      <Plan/>
    </ApolloProvider>
  )

  const initialData = await waitForElement(() => getAllByText('1053'))
  expect(queryAllByTestId('test')).toBeInTheDocument
})
