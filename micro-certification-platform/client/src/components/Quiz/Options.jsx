import React from 'react';
function Options({ options, selectedOption, onSelect }) {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} style={{ margin: '0.5rem 0' }}>
          <button onClick={() => onSelect(option.text)} style={{ width: '100%', textAlign: 'left', backgroundColor: selectedOption === option.text ? '#0056b3' : '#007bff' }}>
            {option.text}
          </button>
        </div>
      ))}
    </div>
  );
}
export default Options;