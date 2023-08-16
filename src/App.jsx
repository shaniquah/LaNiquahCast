import { useEffect, useState } from "react";
// import AuthModal from "./components/AuthModal";
import MainContent from "./components/MainContent";
import supabase from "./config/supabaseClient";
// import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import AuthModal from "./components/AuthModal";
// import SortBy from "./components/Sort";

/**
 * The App function renders different components based on the value of the isAuthenticated state
 * variable.
 * @returns The App component is returning a div element. If the isAuthenticated state is false, it
 * renders an AuthModal component with an onLogin prop that sets the isAuthenticated state to true when
 * called. If the isAuthenticated state is true, it renders a MainContent component.
 */
function App() {
  const [user, setUser] = useState(null);

  /* The `useEffect` hook in this code is used to fetch the user session and set the `user` state variable accordingly. */
  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);

    const unsubscribe = () =>
      supabase.auth.onAuthStateChange((event, session) => {
        switch (event) {
          case "SIGNED_IN":
            setUser(session?.user);
            console.log(user);

            break;
          case "SIGNED_OUT":
            setUser(null);
        }
      });

    return () => {
      unsubscribe();
    };
  }, []);

  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <>
      {user ? (
        <>
          <button onClick={logout}>LogOut</button>
          <MainContent />
        </>
      ) : (
        <div  className="home">
          <div className="home_login" style={{ padding: "20% 30% 0% 30%" }}>
            <h1 className="title" style={{ alignItems: "center" }}>
              <img
                className="logo_page"
                src="./src/assets/penguin.svg"
                width="60px"
              />
              La NiquáhCast
            </h1>
            <button
              className="login"
              style={{ justifyItems: "center" }}
              onClick={login}
            >
              Login with GitHub
            </button>
            <AuthModal />
          </div>
        </div>
      )}
    </>
  );
}

export default App;

// export default function App() {
//   const [user, setUser] = useState(null);

//   const login = async () => {
//     await supabase.auth.signInWithOAuth({
//       provider: "github",
//     });
//   };

//   useEffect(() => {
//     const session = supabase.auth.getSession().then(({ data: { session } }) => {
//       setUser(session);
//     });

//     const {
//       data: { subscription },
//     } = supabase.auth.onAuthStateChange((_event, session) => {
//       setUser(session);
//     });

//     return () => subscription.unsubscribe();
//   }, []);

//   if (!user) {
//     return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
//   } else {
//     return <div>Logged in!</div>;
//   }
// }
