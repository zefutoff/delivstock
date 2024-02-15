import ButtonFaded from "@/components/button/buttonFaded";
import InputEmail from "@/components/input/inputEmail";
import InputPassword from "@/components/input/inputPassword";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter()
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    signIn('credentials', {
      ...data,
      redirect: false
    });
    router.push('/dashboard');
  }

  return (
    <>
    <form onSubmit={loginUser}>
      <input id="email" name="email" type="email" autoComplete="email" value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value})}} required />
      <input id="password" name="password" type="password" autoComplete="current-password" required value={data.password} onChange={(e) => {setData({...data, password: e.target.value})}} />
    </form>
    
    </>
  );
}
