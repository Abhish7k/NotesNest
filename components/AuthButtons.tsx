import { Button } from "@/components/ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/server";
import UserNav from "./UserNav";

const AuthButtons = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div>
      {(await isAuthenticated()) ? (
        <UserNav
          email={user?.email as string}
          image={user?.picture as string}
          name={user?.given_name as string}
        />
      ) : (
        <div className="flex items-center gap-x-5">
          <LoginLink>
            <Button>Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button variant="secondary">Sign Up</Button>
          </RegisterLink>
        </div>
      )}
    </div>
  );
};

export default AuthButtons;
