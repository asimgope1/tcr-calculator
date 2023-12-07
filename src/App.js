import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <header className="text-center">
        <img src={logo} className="w-64 h-64 mx-auto mb-6" alt="logo" />
        <p className="text-xl font-bold">
          Edit <code className="bg-yellow-200 px-1">src/App.js</code> and save to reload.
        </p>
        <a
          className="text-blue-500 hover:underline block mt-4"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
