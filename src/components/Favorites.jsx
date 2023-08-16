import { useEffect } from "react";
import { useState } from "react";
import supabase from "../config/supabaseClient";

export default function Favorites() {
  const [fetchErr, setFetchErr] = useState(null);
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      const { data, error } = await supabase.from("Favorites").select();

      if (error) {
        setFetchErr("Couldn't fetch Favorites!");
        setFavorites(null);
        console.log(error);
      }

      if (data) {
        setFavorites(data);
        setFetchErr(null);
        console.log(data);
      }
    };

    fetchFavorites();
  }, []);
  return (
    <div className="fave_container">
      {fetchErr && <p>{fetchErr}</p>}
      {favorites && (
        <div className="faves">
          <h1>Your Faves</h1>
          {favorites.map((favorite) => (
            <div key={favorite.id}>
              <h2>{favorite.title}</h2>
              <audio controls className="audio_bar">
                <source src={favorite.file} type="audio/ogg" />
              </audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}



/* export function AddFavorites(){
  const [title, setTitle] = useState("")
  const [file, setFile] = useState("")
  const []

  const toggleFaves = async (e) => {
    e.preventDefault()

    if (toggle === on) {
      
    }
  }

  return (
<button onClick={toggleFaves}>Add to Faves</button>
  )
} */