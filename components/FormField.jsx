import React from "react";

function FormField(props) {
  const { error, type, inputRef, ...inputProps } = props;

  return (
    <div className="mb-2 text-left">
      {props.label && <label className="text-semibold">{props.label}</label>}

      <div className="control">
        {type === "textarea" && (
          <textarea
            className="text-md input"
            ref={inputRef}
            {...inputProps}
          ></textarea>
        )}

        {type !== "textarea" && (
          <input
            className="text-md input"
            ref={inputRef}
            type={type}
            {...inputProps}
          ></input>
        )}
      </div>

      {error && <p className="help is-danger">{error.message}</p>}
    </div>
  );
}

export default FormField;
