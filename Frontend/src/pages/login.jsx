// import '../assets/css/login.css';
// import { Link } from "react-router-dom";
// import { signIn } from "../services/auth";
// import React, { useState } from 'react';
// import { NavLink, useNavigate } from "react-router-dom";
// const Login=()=> {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 
//   const handleLogin = async(e) => {
//       e.preventDefault(); // Prevent the default form submission behavior
  
//       // Basic form validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(email)) {
       
//         return;
//       }
  
//       // Password validation: Ensure that the password has a minimum length
//       if (password.length < 6) {
        
//         return;
//       }
  
//       e.preventDefault();
  
//         const form={
//           email:email,
//           password:password
//         };

        
//         signIn(form)
//               .then((res) => {
//                   console.log("hi")
//                   sessionStorage.setItem('token', res.data.token);
//                   setEmail("");
//                   setPassword("");
//                   navigate('/home');
                  
//               })
//               .catch((err) => {
//                   setEmail("");
//                   setPassword("");
//                   console.log(err);
                 
//               });
//               const response = await axios.post('http://localhost:8181/login', { email, password });
//               const token = response.data.token; // Assign token from response
//               setToken(token);
      

//   };

//   return (
//     <div className="box" style={{width:'400px'}}>
//       <h2 style={{color:'black', textAlign:'center'}}>Welcome to EveLy</h2>
//       <form className="App" onSubmit={handleLogin}>
//         <p className="p" style={{textAlign:'center'}}>Login Form</p>

//         <label>Username</label>
//         <input type="text" />
//         {/* {errors.name && <span style={{ color: "red" }}>Name is mandatory</span>} */}

//         <label>Email</label>
//         <input type="email" name='email' onChange={(e)=>setEmail}/>
//         {/* {errors.email && <span style={{ color: "red" }}>Email is mandatory</span>} */}

//         <label>Password</label>
//         <input type="password" name='password' onChange={(e)=>setPassword} />
//         {/* {errors.password && <span style={{ color: "red" }}>Password Required</span>} */}
// <br/>
//         <button style={{marginRight:'15px'}}type="submit" >Submit</button>
//         <button ><Link to={'/signup'} >Sign up!</Link></button>
//         {/* <button><Link to={'/events'}>Events</Link></button>
//         <button><Link to={'/event'}>Create</Link></button> */}
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import '../assets/css/login.css';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
    const handleLogin = async(e) => {
        e.preventDefault(); // Prevent the default form submission behavior
    
        // Basic form validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
         
          return;
        }
    
        // Password validation: Ensure that the password has a minimum length
        if (password.length < 6) {
          
          return;
        }
    
        e.preventDefault();
    
          const form={
            email:email,
            password:password
          };

          
          signIn(form)
                .then((res) => {
                  sessionStorage.setItem('token', res.data.token);
                  setEmail("");
                  setPassword("");
                  // console.log('token')
                  navigate('/home');
                    
                })
                .catch((err) => {
                    setEmail("");
                    setPassword("");
                    console.log(err);
                   
                });
                const response = await axios.post('http://localhost:8181/login', { email, password });
                const token = response.data.token; // Assign token from response
                setToken(token);
        

    };


    return (
      <div className='logincontainer'>
        <div className="box" style={{width:'400px'}}>
                <h2 style={{color:'white', textAlign:'center'}}>Login</h2>
                <form  className="auth-form">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                       
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                       
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" onClick={handleLogin} >Login</button>
                </form>
                <p style={{color:'white'}}>
                    Don't have an account? <NavLink to="/signup" className="switch">Sign Up</NavLink>
                </p>
                <br>
                </br>
                <p style={{color:'white'}}>
                    If you are an admin <NavLink to="/Admin" className="switch"> Click Here</NavLink>
                </p>
        </div>
        </div>
    );
    };

export default Login;