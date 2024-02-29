import { DemoUser } from "./DemoUser"
import { Login } from "./Login"
import { Register } from "./Register"

const Auth = () => {
  return (
    <div className="h-screen w-screen bg-black flex justify-center items-center flex-col border gap-4">
        <Login />
        <Register />
        <DemoUser />
    </div>
  )
}

export default Auth