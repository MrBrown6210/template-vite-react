import axios from "../helper/axios";

export interface SignupDto {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  organization?: string;
  country: string;
  phone: string;
  is_agree_collect_data?: boolean;
  need_notify_review_update?: boolean;
  need_contact_to_review?: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface TokenDto {
  accessToken: string;
}

export const signup = async (signupDto: SignupDto) => {
  const { email, password } = signupDto;
  await axios.post("auth/signup", signupDto);
  await login({
    email,
    password,
  });
};

export const login = async (loginDto: LoginDto) => {
  const { accessToken } = (await axios.post<TokenDto>("auth/login", loginDto))
    .data;
  localStorage.setItem("token", accessToken);
  return accessToken;
};

export const logout = async () => {
  localStorage.removeItem("token");
};
