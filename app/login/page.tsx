import ButtonFaded from "@/components/button/buttonFaded";
import ButtonGithub from "@/components/button/buttonGithub";
import InputEmail from "@/components/input/inputEmail";
import InputPassword from "@/components/input/inputPassword";

export default function LoginPage() {
  return (
    <div>
      <InputEmail />
      <InputPassword />
      <ButtonFaded title="test" />
      <ButtonGithub />
    </div>
  );
}
