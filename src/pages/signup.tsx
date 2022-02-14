import { Link, useNavigate } from 'react-router-dom'
import axios from '../helper/axios'
import api from '../api'
import { ISignupFormValues, SignupForm } from '../components/SignupForm'

const SignupPage = () => {
  const navigate = useNavigate()

  const onFinish = async (e: ISignupFormValues) => {
    try {
      await api.auth.signup(e)
      navigate('/', { replace: true })
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.message)
      }
    }
  }

  return (
    <div className="content px-16 pt-5">
      <div className=" flex">
        <Link to={'/login'}>Register / Login</Link>
        <div>/</div>
        <p>Create a New Account</p>
      </div>
      <div className=" flex justify-between">
        <div>arrow</div>
        <h1>Create a New Account</h1>
        <div></div>
      </div>
      <div className="h-[2px] bg-gray-50"></div>
      <div className="flex justify-center">
        <div className="pt-5 w-3/6">
          <SignupForm onFinish={onFinish}></SignupForm>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
