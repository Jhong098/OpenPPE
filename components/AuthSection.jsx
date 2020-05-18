import React from "react";
import Section from "./Section";
import Auth from "./Auth";

function AuthSection(props) {
  // Values for each auth type
  const allTypeValues = {
    signin: {
      // Top title
      title: "Welcome back",
      // Submit button text
      buttonText: "Sign in",
      // Link text to other auth types
      linkTextSignup: "Create an account",
      linkTextForgotpass: "Forgot Password?",
    },
    signup: {
      title: "Get yourself an account",
      buttonText: "Sign up",
      linkTextSignin: "Sign in",
    },
    forgotpass: {
      title: "Get a new password",
      buttonText: "Reset password",
    },
    changepass: {
      title: "Choose a new password",
      buttonText: "Change password",
    },
  };

  // Ensure we have a valid auth type
  const currentType = allTypeValues[props.type] ? props.type : "signup";

  // Get values for current auth type
  const typeValues = allTypeValues[currentType];

  return (
    <Section>
      <div className="text-center">
        <h1 className="text-lg font-semibold mb-4">{typeValues.title}</h1>
        <Auth
          type={currentType}
          typeValues={typeValues}
          parentColor={props.color}
          providers={props.providers}
          afterAuthPath={props.afterAuthPath}
          key={currentType}
        ></Auth>
      </div>
    </Section>
  );
}

export default AuthSection;
