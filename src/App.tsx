import { ApolloProvider } from '@apollo/client/react'
import configureFakeBackend from './common/api/fake-backend'
import { apolloClient } from './common/api/apolloClient'
import { AuthProvider, ThemeProvider } from './common/context'
import AllRoutes from './routes/Routes'
import { Toaster } from "react-hot-toast";
import './assets/scss/app.scss'
import './assets/scss/icons.scss'

configureFakeBackend()

// function App() {
// 	return (
// 		<ThemeProvider>
// 			<AuthProvider>
// 				<ApolloProvider client={apolloClient}>
// 					<AllRoutes />
// 				</ApolloProvider>
// 			</AuthProvider>
// 		</ThemeProvider>
// 	)
// }

 function App() {
  return (
    <>
      <Toaster position="top-right" />
     <ThemeProvider>
			<AuthProvider>
				<ApolloProvider client={apolloClient}>
					<AllRoutes />
				</ApolloProvider>
			</AuthProvider>
		</ThemeProvider>
    </>
  );
}


export default App
