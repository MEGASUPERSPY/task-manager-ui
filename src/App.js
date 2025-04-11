import React, { useState } from "react";
import "./index.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-4">Введите ваше имя</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded-md w-full"
          placeholder="Имя"
        />
        <p className="mt-4 text-gray-500">Привет, {name ? name : "гость"}!</p>
      </div>
    </div>
  );
}

export default App;