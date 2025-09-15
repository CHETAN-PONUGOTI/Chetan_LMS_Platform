import React from 'react';
function ProgressBar({ current, total }) {
  const percentage = (current / total) * 100;
  const containerStyles = { height: 20, width: '100%', backgroundColor: "#e0e0de", borderRadius: 50, margin: '20px 0' };
  const fillerStyles = { height: '100%', width: `${percentage}%`, backgroundColor: '#007bff', borderRadius: 'inherit', textAlign: 'right', transition: 'width 0.5s ease-in-out' };
  const labelStyles = { padding: 5, color: 'white', fontWeight: 'bold' };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${Math.round(percentage)}%`}</span>
      </div>
    </div>
  );
}
export default ProgressBar;