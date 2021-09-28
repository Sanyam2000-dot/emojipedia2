import React, { useState } from "react";
import "./Input.css";

const emojidictionary = {
  "😀": "Grinning Face",
  "😃": "Grinning Face with Big Eyes",
  "😄": "Grinning Face with Smiling Eyes",
  "😁": "Beaming Face with Smiling Eyes",
  "😆": "Grinning Squinting Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "😂": "Face with Tears of Joy",
  "🙂": "Slightly Smiling Face",
  "🙃": "Upside-Down Face",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "😇": "Smiling Face with Halo",
  "🥰 ": "Smiling Face with Hearts",
  "😍 ": "Smiling Face with Heart-Eyes",
  "🤩 ": "Star-Struck",
  "😘 ": "Face Blowing a Kiss",
  "😗 ": "Kissing Face",
  "😚": "Kissing Face with Closed Eyes",
  "😙": "Kissing Face with Smiling Eyes",
  "😒": "What yaar..",
};

export default function Input() {
  const [user, setUser] = useState("");
  var dbEmoji = Object.keys(emojidictionary);

  function inputHandler(event) {
    var InputValue = event.target.value;
    var meaning = emojidictionary[InputValue];
    setUser(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojidictionary[emoji];
    setUser(meaning);
  }
  return (
    <div>
      <h1> EMOJIPEDIA </h1>
      <input className="InputArea" onChange={inputHandler}></input>
      <h2> {user} </h2>
      <div className="EmojiDiv">
        {dbEmoji.map((emoji, index) => {
          return (
            <span
              className="Emoji"
              key={index}
              onClick={() => emojiClickHandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>
    </div>
  );
}
