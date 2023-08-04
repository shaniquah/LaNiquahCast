/* The line `import supabase from "../config/supabaseClient";` is importing the `supabase` object from
the `supabaseClient.js` file located in the `../config` directory. This allows the code to access
the Supabase client and its methods for interacting with the Supabase database. */
import supabase from "../config/supabaseClient";

/**
 * The function `AddFave` subscribes to a Supabase channel and sends a random cursor position when the
 * subscription is successful.
 */
function AddFave() {
  supabase
    .channel("any")
    .on("broadcast", { event: "cursor-pos" }, (payload) => {
      console.log("Cursor position received!", payload);
    })
    .subscribe((status) => {
      if (status === "SUBSCRIBED") {
        channel.send({
          type: "broadcast",
          event: "cursor-pos",
          payload: { x: Math.random(), y: Math.random() },
        });
      }
    });
}

/**
 * The function `RemoveFave` removes a channel from the Supabase database.
 */
function RemoveFave() {
  supabase.removeChannel(myChannel);
}

/**
 * The function `RemoveAllFaves` calls the `removeAllChannels` method from the `supabase` object.
 */
function RemoveAllFaves() {
  supabase.removeAllChannels();
}
