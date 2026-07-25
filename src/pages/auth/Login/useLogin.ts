// import { authApi, useAuthContext } from '@/common'
// import { useMemo, useState } from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'
// import type { User } from '@/types'

// export default function useLogin() {
// 	const [loading, setLoading] = useState(false)
// 	const location = useLocation()
// 	const navigate = useNavigate()

// 	const { isAuthenticated, saveSession } = useAuthContext()

// 	const redirectUrl = useMemo(
// 		() =>
// 			location.state && location.state.from
// 				? location.state.from.pathname
// 				: '/',
// 		[location.state]
// 	)

// 	const login = async ({ email, password }: User) => {
// 		setLoading(true)
// 		try {
// 			const res: any = await authApi.login({ email, password })
// 			if (res.token) {
// 				saveSession({ ...(res.user ?? {}), token: res.token })
// 				navigate(redirectUrl)
// 			}
// 		} finally {
// 			setLoading(false)
// 		}
// 	}

// 	return { loading, login, redirectUrl, isAuthenticated }
// }



import { gql } from '@apollo/client'
import { useMutation } from '@apollo/client/react'
import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '@/common/context'

const LOGIN_MUTATION = gql`
  mutation Login($mobileno: String!, $password: String!) {
    login(mobileno: $mobileno, password: $password) {
      status
      message
      accessToken
      refreshToken
    }
  }
`

type LoginForm = {
  mobileno: string
  password: string
}

export default function useLogin() {
  type LoginMutationData = {
  login: {
    status: string
    message: string
    accessToken: string
    refreshToken: string
  }
}

type LoginMutationVars = {
  mobileno: string
  password: string
}

const [loginMutation, { loading }] = useMutation<
  LoginMutationData,
  LoginMutationVars
>(LOGIN_MUTATION)


  const location = useLocation()
  const navigate = useNavigate()
  const { saveSession, isAuthenticated } = useAuthContext()

  const redirectUrl = useMemo(
    () =>
      location.state && location.state.from
        ? location.state.from.pathname
        : '/',
    [location.state]
  )

  const login = async ({ mobileno, password }: LoginForm) => {
    try {
      const { data } = await loginMutation({
        variables: { mobileno, password },
      })

      const result = data?.login
      if (result?.accessToken) {
        saveSession({
          mobileno,
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
        })
        navigate(redirectUrl)
      } else {
        console.error(result?.message || 'Login failed')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { loading, login, redirectUrl, isAuthenticated }
}