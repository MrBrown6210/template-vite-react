import { rest } from 'msw'
import { LoginDto, TokenDto, SignupDto } from '../api/auth'

const API_URL = import.meta.env.VITE_API_URL

export const login = rest.post<LoginDto>(`${API_URL}/auth/login`, (req, res, ctx) => {
  const { phone } = req.body
  console.log(phone)
  if (phone !== '0123456789')
    return res(
      ctx.status(400),
      ctx.json({
        message: 'ไม่มีผู้ใช้นี้ในระบบ'
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
