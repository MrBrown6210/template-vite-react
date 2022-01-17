import { rest } from "msw";
import { LoginDto, TokenDto } from "../api/auth";

const API_URL = import.meta.env.VITE_API_URL;

export const login = rest.post<LoginDto>(
  `${API_URL}/auth/login`,
  (req, res, ctx) => {
    const result = ctx.json<TokenDto>({
      accessToken: "abcd",
    });
    return res(result);
  }
);
