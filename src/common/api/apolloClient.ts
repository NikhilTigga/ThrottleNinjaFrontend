import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL || 'http://127.0.0.1:8000/graphql/graphql/',
})

const authLink = setContext((_, { headers }) => {
  const storedUser = sessionStorage.getItem('hyper_user')
  const parsedUser = storedUser ? JSON.parse(storedUser) : null
  const token = parsedUser?.token ?? null

  return {
    headers: {
      ...headers,
      authorization: token ? `JWT ${token}` : '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
