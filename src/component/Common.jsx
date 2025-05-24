import React, { useState } from 'react';

function Common() {
  const [input, setInput] = useState('');
  const [prefix, setPrefix] = useState('');

  const longestCommonPrefix = (arr) => {
    if (arr.length === 0) return "";
    arr.sort();
    let first = arr[0];
    let last = arr[arr.length - 1];
    let i = 0;
    while (i < first.length && first[i] === last[i]) {
      i++;
    }
    return first.substring(0, i);
  };

  const handleClick = () => {
    const arr = input.split(',').map(str => str.trim());
    const res = longestCommonPrefix(arr);
    setPrefix(res);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-300">🔍 Longest Common Prefix Finder</h1>
        
        <input
          type="text"
          placeholder="Enter strings separated by comma"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        
        <button
          onClick={handleClick}
          className="mt-4 w-full bg-purple-600 hover:bg-purple-700 transition-colors text-white py-2 px-4 rounded-lg font-semibold"
        >
          Find Prefix
        </button>

        <div className="mt-6 text-center text-lg">
          Result: <span className="text-green-400 font-mono">{prefix ? `"${prefix}"` : 'No Common Prefix Found'}</span>
        </div>
      </div>
    </div>
  );
}

export default Common;
