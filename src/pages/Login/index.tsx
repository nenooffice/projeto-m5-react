import * as Styled from "./style"
import logo from "../../assets/logo_patterns/logo.png"
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"
import { LoginProps } from "../../interfaces"
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = ({ setLogged }: LoginProps) => {
  const nav = useNavigate();

  const [ email, setEmail ] = useState<string> ("");
  const [ password, setPassword ] = useState<string> ("");

  const verifyLogin = () => {
    if (email === "admin" && password === "admin") {
      setLogged(true);
      nav("/");
      toast.success("You're in.")
      return;
    }

    toast.error("You shall not pass!")
  };

  return (
    <Styled.LoginPageContainer>
      <Styled.LoginFormContainer>
        <Styled.LoginLogoContainer>
          <h1> Project Burger</h1>
          <img alt="logo" src={logo} />
        </Styled.LoginLogoContainer>
        <Input
          value={email}
          onChange={(a) => setEmail(a.target.value)}
          placeholder="Email"
        />
        <Input
          type={password}
          value={password}
          onChange={(a) => setPassword(a.target.value)}
          placeholder="Password"
        />
        <Button text="Log in" size="small" onClick={verifyLogin}/>
      </Styled.LoginFormContainer>
    </Styled.LoginPageContainer>
  );
};

export default Login;