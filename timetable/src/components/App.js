import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import InfoScreen from './InfoScreen'

// Apollo Client, uses the Helsinki Region GraphQL-endpoint of digitransit.
const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
})

// The whole app. Wraps an ApolloProvider around the InfoScreen.
const App = () => {
  return (<div>
    <ApolloProvider client={client}>
      <InfoScreen/>
    </ApolloProvider>
  </div>)
}

export default App
