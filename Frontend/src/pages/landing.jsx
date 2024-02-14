// import React, { useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

// const MyComponent = () => {
//   const history = useHistory();

//   useEffect(() => {
//     const redirectTimeout = setTimeout(() => {
//       // Replace '/new-component' with the path of the component you want to redirect to
//       history.push('/login');
//     }, 2000); // Redirect after 2 seconds (2000 milliseconds)

//     // Clean up the timeout to avoid memory leaks
//     return () => clearTimeout(redirectTimeout);
//   }, [history]); // Include history in dependency array to avoid linting warning

//   return (
//     <div>
//       <h1>This is my component</h1>
//       {/* You can optionally display a message or loading spinner while redirecting */}
//     </div>
//   );
// };

// export default MyComponent;
