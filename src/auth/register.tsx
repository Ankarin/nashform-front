import { SignUp } from "@clerk/clerk-react";

export const Register = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <SignUp signInUrl="/login"></SignUp>
    </div>
  );
};
