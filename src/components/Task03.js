import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [colorlist, setcolorlist] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setcolorlist(!colorlist);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setcolorlist(false);
  };

  return (
    <div>
      <div class="text-center mt-4">
        <button class="btn btn-primary" onClick={handleButtonClick}>Pick a color</button>
      </div>
      <div class="container-sm container w-25">
      {colorlist && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              className="color-item square"
              style={{ backgroundColor: color, listStyle: "none" }}
              onClick={() => handleColorClick(color)}
            ><div  style={{ color: 'white', fontSize: 'large', fontStyle: 'italic', fontWeight: 'bolder' ,textAlign:"center"}}>{color}</div></li>
          ))}
        </ul>
      )}
      {selectedColor && (
        <div className="selected-color square mx-auto" style={{border:"2px solid black", backgroundColor: selectedColor }}>
          <div style={{ color: 'white', fontSize: 'large', fontStyle: 'italic', fontWeight: 'bolder' ,textAlign:"center"  }}>Selected Color: {selectedColor}</div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ColorPicker;
