import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import CreatableSelect from "react-select/creatable";
import { CATEGORY_OPTIONS, SIZE_OPTIONS } from "utils/const";
import { StyledButton } from "./button";
import { createRequest } from "utils/db";
import { useAuth } from "utils/auth.js";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const RequestForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const [values, setSelectValues] = useState({});
  const { handleSubmit, register, errors, setValue } = useForm();

  // Handle form submission
  const onSubmit = async (data) => {
    const { name, uid } = auth.user;
    // Show pending indicator
    setPending(true);
    const doc = { ...data, requestor: name, status: "open", requestor_id: uid };
    try {
      await createRequest(doc);
    } catch (err) {
      console.error(err);
    }

    setPending(false);
    toast.success("Successfully create request", {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    router.push("/requests");
  };

  const handleMultiChange = (name, selectedOption) => {
    setValue(name, selectedOption?.value);
    setSelectValues({ ...values, ...selectedOption });
  };

  useEffect(() => {
    register({ name: "category" });
    register({ name: "size" });
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="center-container mt-6 flex flex-col"
    >
      <h1 className="title mb-8">New Request</h1>
      <FormField
        name="name"
        placeholder="Name"
        error={errors.name}
        inputRef={register({ required: "Please enter a Name" })}
      />
      <FormField
        name="location"
        placeholder="Location"
        error={errors.location}
        inputRef={register({ required: "Please enter a location" })}
      />

      <CreatableSelect
        className="mb-2"
        value={values.category}
        isClearable
        options={CATEGORY_OPTIONS}
        placeholder="Category"
        onChange={(selected) => handleMultiChange("category", selected)}
      />

      <CreatableSelect
        className="mb-2"
        value={values.selectedOption}
        isClearable
        options={SIZE_OPTIONS}
        placeholder="Size"
        onChange={(selected) => handleMultiChange("size", selected)}
      />

      <FormField
        name="quantity"
        type="number"
        placeholder="Quantity"
        error={errors.quantity}
        min={0}
        inputRef={register({ required: "Please enter a quantity" })}
      />

      <FormField
        name="unit_cost"
        type="number"
        placeholder="Unit Cost"
        error={errors.quantity}
        min={0}
        step="0.01"
        inputRef={register}
      />
      <StyledButton classNames="mt-6 text-text_white">Create</StyledButton>
      {pending && <p>Loading...</p>}
    </form>
  );
};

export default RequestForm;
