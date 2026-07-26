// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'

// const httpLink = createHttpLink({
//   uri: import.meta.env.VITE_GRAPHQL_URL || 'http://172.25.208.1:8000/graphql/graphql/',
// })

// const authLink = setContext((_, { headers }) => {
//   const storedUser = sessionStorage.getItem('hyper_user')
//   const parsedUser = storedUser ? JSON.parse(storedUser) : null
//   const token = parsedUser?.token ?? null

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `JWT ${token}` : '',
//     },
//   }
// })

// export const apolloClient = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// })


import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_URL || 'http://127.0.0.1:8000/graphql/graphql/',
  credentials: 'include',
})

function getCsrfToken() {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith('csrftoken='))
    ?.split('=')[1]
}

const authLink = setContext((_, { headers }) => {
  const storedUser = localStorage.getItem('_VELONIC_AUTH')
  const parsedUser = storedUser ? JSON.parse(storedUser) : null
  const token = parsedUser?.accessToken ?? parsedUser?.token ?? null
  const csrfToken = getCsrfToken()

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'X-CSRFToken': csrfToken || '',
    },
  }
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})