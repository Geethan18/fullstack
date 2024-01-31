import "../assets/css/login.css";

function Signup() {
  return (
    <div className="box">
      <form className="signup-form">
        <h2 style={{color:'black'}}>Sign Up</h2>

        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" name="fullName" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
<br/>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;