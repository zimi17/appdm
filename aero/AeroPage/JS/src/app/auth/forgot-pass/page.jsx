import Link from "next/link";
import ThirdPartyAuth from "@/components/ThirdPartyAuth";
import ForgotPasswordForm from "./ForgotPasswordForm";

export const metadata = {
  title: "Forgot Password",
};

const ForgotPassword = () => {
  return (
    <>
      <ForgotPasswordForm />

      <ThirdPartyAuth />

      <p className="shrink text-center text-zinc-200">
        Already have an account ?
        <Link href="/auth/sign-in" className="ms-1 text-primary">
          <b>Login</b>
        </Link>
      </p>
    </>
  );
};

export default ForgotPassword;
