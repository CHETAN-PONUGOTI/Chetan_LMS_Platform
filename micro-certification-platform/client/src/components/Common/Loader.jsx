import React from 'react';

function Loader() {
  const style = {
    loader: { border: '5px solid #f3f3f3', borderTop: '5px solid #3498db', borderRadius: '50%', width: '50px', height: '50px', animation: 'spin 1s linear infinite', margin: '50px auto' },
  };
  return <div style={style.loader}></div>;
}
export default Loader;