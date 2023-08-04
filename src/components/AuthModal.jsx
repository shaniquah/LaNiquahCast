/* The code is importing the `useState` hook from the React library and the `createClient` function
from the `@supabase/supabase-js` library. */
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../App.css";


/* The `createClient` function is used to create a client object for interacting with the Supabase API.
It takes two arguments: the Supabase URL and the Supabase API key. */

const supabaseUrl = "https://zypoxsrnkjumhgmhowsb.supabase.co"

const supabasekey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cG94c3Jua2p1bWhnbWhvd3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODM4MTMsImV4cCI6MjAwNjU1OTgxM30.UmsJU-2p_H2z0GuDWMuKpmeNszdgoikLverW1Ne2FCE"



export const supabase = createClient(supabaseUrl, supabasekey)

// /**
//  * The AuthModal component is a form that allows users to login, signup, and logout using Supabase
//  * authentication.
//  * @returns The `AuthModal` component is returning a JSX element.
//  */
// export default function AuthModal({ onLogin, isOpen }) {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   /**
//    * The function `handleLogin` is an asynchronous function that handles the login process using
//    * Supabase authentication in a JavaScript React application.
//    */
//   const handleLogin = async (event) => {
//     event.preventDefault();

//     /* The code block is handling the login process using Supabase authentication. */
//     try {
//       const { user, error } = await supabase.auth.signIn({ email, password });

//       if (error) {
//         console.log("Login error:", error.message);
//       } else {
//         console.log("Logged in user:", user)
//         onLogin()
//       }
//     } catch (error) {
//       console.error("Login error:", error.message);
//     }

//   };

//   const handleSignup = async (event) => {
//     event.preventDefault();

//     const { data, error } = await supabase.auth.signUp({
//       email: "example@email.com",
//       password: "example-password",
//     });

//     try {
//       const { user, error } = await supabase.auth.signUp({ email, password });
//       if (error) {
//         console.error("Signup error:", error.message);
//       } else {
//         console.log("Signed up user:", user);
//         // Close the modal or update UI as needed
//       }
//     } catch (error) {
//       console.error("Signup error:", error.message);
//     }
//   };

//   const handleLogout = async () => {
//     const { error } = await supabase.auth.signOut();

//     try {
//       await supabase.auth.signOut();
//       // Update UI or navigate to a different page
//     } catch (error) {
//       console.error("Logout error:", error.message);
//     }
//   };

//   const retrieveSession = async () => {
//     const { data, error } = await supabase.auth.getSession();
//   };


//   return (
//     <div className={`auth-modal ${isOpen ? "open" : ""}`}>
//       <div className="modal-content">
//         <form>
//           <input
//             type="email"
//             placeholder="you@example.com"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// }
