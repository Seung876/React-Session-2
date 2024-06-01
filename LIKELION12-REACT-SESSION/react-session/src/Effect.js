import React, { useState, useEffect } from 'react';

const EffectComponent = () => {
  const [text, setText] = useState('');


  useEffect(() => {
    document.title = `Typed Text: ${text}`;
    return () => {
      document.title = 'React App';
    };
  }, [text]);

  return (
    <div>
      <h2>Effect Component</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Typed Text: {text}</p>
    </div>
  );
};

export default EffectComponent;

