import React, { useState } from 'react'

function Withdrawal() {
  const [clickedElement, setClickedElement] = useState(null);

  // Initial elements list
  const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  // Click handler to hide the clicked element and show input box
  const handleClick = (index) => {
    setClickedElement(index);
  };
  return (
    <div>
    {/* Conditionally render the input box if an element is clicked */}
    {clickedElement !== null && (
      <div>
        <input type="text" placeholder={`Editing ${elements[clickedElement]}`} />
      </div>
    )}

    {/* Map through the elements and render them */}
    {elements.map((element, index) => (
      <div key={index}>
        {/* Hide the clicked element */}
        {clickedElement !== index && (
          <button onClick={() => handleClick(index)}>
            {element}
          </button>
        )}
      </div>
    ))}
  </div>
  )
}

export default Withdrawal
