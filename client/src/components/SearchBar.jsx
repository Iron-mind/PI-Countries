import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  const  [input, setInput] = useState("");
  

  return (
    <form class="form-inline" onSubmit={(e) => {
      e.preventDefault();
      onSearch(input);
    }}>
      <input
      class="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        onChange={e=>{
          setInput(e.target.value)
        }}
      />
      <input type="submit" class="btn btn-outline-success my-2 my-sm-0" value="Agregar" />
    </form>
  );
}