import { useLink } from "@refinedev/core";
import { SignIn } from "@clerk/clerk-react";

export const Login = () => {
  const Link = useLink();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignIn signUpUrl="/register"></SignIn>
    </div>
  );
};
