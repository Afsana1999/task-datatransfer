import React, { useEffect, useState } from "react";

function NameInp({ setname }) {
  return (
    <div>
     
      <input
        className="name"
        placeholder="Adinizi daxil edin..."
        type="text"
        onChange={(e) => setname(e.target.value)}
      />
    </div>
  );
}

export default NameInp;
