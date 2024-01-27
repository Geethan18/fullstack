import { useForm } from "react-hook-form";
import '../assets/css/login.css';
import { Link } from "react-router-dom";
function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <div className="box">
      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <p className="p">Login Form</p>

        <label>Username</label>
        <input type="text" {...register("name", { required: true })} />
        {errors.name && <span style={{ color: "red" }}>Name is mandatory</span>}

        <label>Email</label>
        <input type="email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>Email is mandatory</span>}

        <label>Password</label>
        <input type="password" {...register("password", { required: true })} />
        {errors.password && <span style={{ color: "red" }}>Password Required</span>}

        <button type="submit">Submit</button>
        <button><Link to={'/signup'}>Sign up!</Link></button>
        <button><Link to={'/events'}>Events</Link></button>
      </form>
    </div>
  );
}

export default Login;
