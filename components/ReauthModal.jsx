import React, { useState } from "react";
import FormAlert from "./FormAlert";
import FormField from "./FormField";
import { StyledButton } from "components/button";
import AuthSocial from "./AuthSocial";
import { useAuth } from "utils/auth";
import { useForm } from "react-hook-form";

function ReauthModal(props) {
  const auth = useAuth();
  const [pending, setPending] = useState(false);
  const [formAlert, setFormAlert] = useState(null);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const { pass } = data;
    setPending(true);

    auth
      .signin(auth.user.email, pass)
      .then(() => props.onComplete())
      .catch((error) => {
        // Hide pending indicator
        setPending(false);
        // Show error alert message
        setFormAlert({
          type: "error",
          message: error.message,
        });
      });
  };

  return (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="card">
        <header className="card-header">
          <p className="card-header-title">
            Please sign in again to complete this action
          </p>
          <span className="card-header-icon">
            <a
              className="delete"
              ariaLabel="close"
              onClick={(e) => props.onCancel()}
            ></a>
          </span>
        </header>
        <section className="card-content">
          {formAlert && (
            <FormAlert
              type={formAlert.type}
              message={formAlert.message}
            ></FormAlert>
          )}

          {props.provider === "password" && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                name="pass"
                type="password"
                placeholder="Password"
                error={errors.pass}
                inputRef={register({
                  required: "Please enter your password",
                })}
              ></FormField>
              <div className="field">
                <div className="control">
                  <StyledButton>Sign in</StyledButton>
                </div>
              </div>
            </form>
          )}

          {props.provider !== "password" && (
            <AuthSocial
              type="signin"
              buttonText="Sign in"
              showLastUsed={false}
              providers={[props.provider]}
              onAuth={props.onComplete}
              onError={(message) => {
                setFormAlert({
                  type: "error",
                  message: message,
                });
              }}
            ></AuthSocial>
          )}
        </section>
      </div>
    </div>
  );
}

export default ReauthModal;
