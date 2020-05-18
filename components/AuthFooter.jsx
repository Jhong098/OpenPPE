import React from "react";
import Link from "next/link";

function AuthFooter({ type, typeValues }) {
  return (
    <div className="text-center mt-4 text-sm">
      {type === "signup" && (
        <>
          Have an account already?
          <Link href="/auth/signin">
            <a>{typeValues.linkTextSignin}</a>
          </Link>
        </>
      )}

      {type === "signin" && (
        <>
          <Link href="/auth/signup">
            <a className="mx-4">{typeValues.linkTextSignup}</a>
          </Link>

          <Link href="/auth/forgotpass">
            <a className="mx-4">{typeValues.linkTextForgotpass}</a>
          </Link>
        </>
      )}
    </div>
  );
}

export default AuthFooter;
