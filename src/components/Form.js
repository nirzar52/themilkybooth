import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, errors, reset, formState } = useForm();
  const { isDirty, isSubmitting } = formState;

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1> Your Data</h1>
      <div>
        <label>Name</label>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          ref={register({ required: "Name Required " })}
        />
        <span>{errors.name?.message}</span>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register({
            required: "Email Required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        <span>{errors.email?.message}</span>
      </div>
      <div>
        <label>Accept Terms</label>
        <input
          type="checkbox"
          placeholder="Accept Terms"
          name="acceptedTerms"
          ref={register({ required: true })}
        />
        {errors.acceptedTerms && <span>You must accepet the terms</span>}
      </div>

      <input type="submit" onClick={reset} disabled={!isDirty || isSubmitting}>
        Reset
      <input type="submit" disabled={isSubmitting} />
    </form>
  );
}
