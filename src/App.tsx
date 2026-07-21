import { ApolloProvider } from '@apollo/client/react'
import configureFakeBackend from './common/api/fake-backend'
import { apolloClient } from './common/api/apolloClient'
import { AuthProvider, ThemeProvider } from './common/context'
import AllRoutes from './routes/Routes'

import './assets/scss/app.scss'
import './assets/scss/icons.scss'

configureFakeBackend()

function App() {
	return (
		<ThemeProvider>
			<AuthProvider>
				<ApolloProvider client={apolloClient}>
					<AllRoutes />
				</ApolloProvider>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
