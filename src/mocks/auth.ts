import { rest } from 'msw'
import { LoginDto, TokenDto, SignupDto } from '../api/auth'

const API_URL = import.meta.env.VITE_API_URL

export const login = rest.post<LoginDto>(`${API_URL}/auth/login`, (req, res, ctx) => {
  const { email, password } = req.body
  if (email !== 'superadmin@gmail.com')
    return res(
      ctx.status(400),
      ctx.json({
        message: 'Wrong credential'
      })
    )
  const result = ctx.json<TokenDto>({
    accessToken: 'abcd'
  })
  return res(result)
})

export const signup = rest.post<SignupDto>(`${API_URL}/auth/signup`, (req, res, ctx) => {
  return res(ctx.status(201), ctx.json(undefined))
})
