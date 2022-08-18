import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

export function Button02() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      id="button-02"
      className="
        relative bg-purple-300 p-1 w-[80px] h-[40px] rounded-3xl flex
        items-center overflow-hidden shadow-inner
      "
      onClick={() => setDarkMode(!darkMode)}
      aria-hidden="true"
    >
      <div
        className={`absolute flex items-center gap-3 transition duration-500 -left-6 ${
          darkMode ? 'translate-x-9' : 'translate-x-0'
        } text-purple-800`}
      >
        <FaMoon />
        <div className="bg-purple-800 rounded-full h-9 w-9" />
        <FaSun />
      </div>
    </div>
  );
}
