// // import { Link } from "react-router-dom";
// // import "../assets/css/login.css";

// // function Signup() {
// //   return (
// //     <div className="box">
// //       <form className="signup-form">
// //         <h2 style={{color:'black'}}>Sign Up</h2>

// //         <label htmlFor="fullName">Full Name</label>
// //         <input type="text" id="fullName" name="fullName" required />

// //         <label htmlFor="email">Email</label>
// //         <input type="email" id="email" name="email" required />

// //         <label htmlFor="password">Password</label>
// //         <input type="password" id="password" name="password" required />
// // <br/>
// //         <button type="submit"><Link to={'/login'}>Sign Up</Link></button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Signup;




// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { signUp } from '../services/auth';


// const Register =()=>{
   
// const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate(); 
//     const handleLogin = (e) => {
//         e.preventDefault(); // Prevent the default form submission behavior
    
//         const formData = {
        
//             email: email,
//             password: password
//             // Add other form fields as needed
//         };
    
//         signUp(formData)
//             .then((res) => {
//                 // Handle successful sign-up
//                 console.log(formData)
               
//                 setEmail("");
//                 setPassword("");
//                 navigate('/home');
//             })
//             .catch((err) => {
//                 // Handle sign-up error
                
//                 setEmail("");
//                 setPassword("");
//                 console.log(err);
//             });
//     };
  
//     return (
//         <div style={{
//             margin: 0,
//             padding: 0,
//             fontFamily: 'Arial, sans-serif',
//             backgroundColor: '#f0f0f0',
//             // backgroundImage: url('https://images.pexels.com/photos/2342400/pexels-photo-2342400.jpeg?auto=compress&cs=tinysrgb&w=600'),
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             height: '100vh',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center',
//         }}>
//             <div className="auth" style={{
//                 maxWidth: '400px',
//                 padding: '20px',
//                 borderRadius: '10px',
                
//                 boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
//                 textAlign: 'center',
//                 animation: 'fadeIn 1s ease',
//             }}>
//                 <h2>Register</h2>
//                 <form  className="auth-form">
//                 <input
//                         type="text"
                       
//                         placeholder="Name"
                        
                       
//                         required
//                     />
//                     <input
//                         type="email"
//                         name="email"
//                         placeholder="Email Address"
//                         onChange={(e) => setEmail(e.target.value)}
                    
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="password"
//                         placeholder="Password"
//                         onChange={(e) => setPassword(e.target.value)}
                       
//                         required
//                     />
//                     <input
//                         type="password"
//                         name="Repeat password"
//                         placeholder="Repeat Password"
//                         required
//                     />
//                     <input
//                         type="Number"
//                         name=" Mobile"
//                         placeholder=" Mob Number"
                        
//                         required
//                     />
                   
//                    <button type="submit" onClick={handleLogin}>Login</button>
//                 </form>
//                 <p>
//                    Already have an account <NavLink to="/login" className="switch"> Log in</NavLink>
//                 </p>
//                 <br>
//                 </br>
               
//             </div>
//         </div>
//     );
//     };

// export default Register;
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signUp } from '../services/auth';
import "../assets/css/login.css";
const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [mobile, setMobile] = useState("");
    const navigate = useNavigate(); 

    const handleSignUp = (e) => {
        e.preventDefault();
        
        if (password !== repeatPassword) {
            console.log("Passwords do not match");
            return;
        }

        const formData = {
            name: name,
            email: email,
            password: password,
            role: "USER", // Assuming the default role is "USER"
            mobile: mobile
        };

        signUp(formData)
            .then((res) => {
                console.log("Registration successful:", res);
                setName("");
                setEmail("");
                setPassword("");
                setRepeatPassword("");
                setMobile("");
                navigate('/login');
            })
            .catch((err) => {
                console.error("Registration failed:", err);
                // Handle signup error
            });
    };

    return (
        <div className="logincontainer">
            <div className="box" style={{width:'400px'}}>
                <h2 style={{color:'white'}}>Sign Up</h2>
                <form className="signup-form">
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <br/>
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <br/>
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <br/>
                    <input
                        type="password"
                        placeholder="Repeat Password"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                        required
                    />
                    <br/>
                    <input
                        type="number"
                        placeholder="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    <br/>
                    <button type="submit" onClick={handleSignUp}>Sign Up</button>
                </form>
                <p style={{color:'white', fontSize:'20px'}}>
                   Already have an account? <NavLink to="/login" className="switch">Log in</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Register;
