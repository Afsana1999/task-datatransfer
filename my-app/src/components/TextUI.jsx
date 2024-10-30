import React from "react";

function TextUI({ name, email }) {
  return (
    <div>
      <p>Name : {name} </p>
      <p> Email : {email}</p>
    </div>
  );
}

export default TextUI;
