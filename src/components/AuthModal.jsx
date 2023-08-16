/* The code is importing the `useState` hook from the React library and the `createClient` function
from the `@supabase/supabase-js` library. */
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import "../App.css";

/* The `createClient` function is used to create a client object for interacting with the Supabase API.
It takes two arguments: the Supabase URL and the Supabase API key. */

const supabaseUrl = "https://zypoxsrnkjumhgmhowsb.supabase.co";

const supabasekey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp5cG94c3Jua2p1bWhnbWhvd3NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5ODM4MTMsImV4cCI6MjAwNjU1OTgxM30.UmsJU-2p_H2z0GuDWMuKpmeNszdgoikLverW1Ne2FCE";

export const supabase = createClient(supabaseUrl, supabasekey);

export default function AuthModal() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
    joinedNewsletter: true,
  });

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
    }))
}

function handleSubmit(event) {
  event.preventDefault()
  if(formData.password === formData.passwordConfirm) {
      console.log("Successfully signed up")
  } else {
      console.log("Passwords do not match")
      return
  }
  
  if(formData.joinedNewsletter) {
      console.log("Thanks for signing up for our newsletter!")
  }
}

return (
  <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
          <input 
              type="email" 
              placeholder="Email address"
              className="form--input"
              name="email"
              onChange={handleChange}
              value={formData.email}
          />
          <input 
              type="password" 
              placeholder="Password"
              className="form--input"
              name="password"
              onChange={handleChange}
              value={formData.password}
          />
          <input 
              type="password" 
              placeholder="Confirm password"
              className="form--input"
              name="passwordConfirm"
              onChange={handleChange}
              value={formData.passwordConfirm}
          />
          
          <div className="form--marketing">
              <input
                  id="okayToEmail"
                  type="checkbox"
                  name="joinedNewsletter"
                  onChange={handleChange}
                  checked={formData.joinedNewsletter}
              />
              <label htmlFor="okayToEmail">I want to join the newsletter</label>
          </div>
          <button 
              className="signup"
          >
              Sign up with Email
          </button>
      </form>
  </div>
)
}



