import { LoginButton } from "@/components/auth/login-button";
import CardCustom from "@/components/card";
import { Button } from "@nextui-org/button";

export default function Home() {
  return (
   <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-withe drop-shadow-md">
          Auth
        </h1>
        <p className="text-withe text-lg">
          Connexion
        </p>
        <div>
          <LoginButton>
            <button>se connecter</button>
          </LoginButton>
          
        </div>
      </div>
   </main>
  );
}
