import React, { useState } from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map(file => URL.createObjectURL(file));
    setImages(imageUrls);
  };

  return (
    <div>
      <h1>Hello, Vite + React!</h1>
      <form>
        <input type="file" multiple accept="image/*" onChange={handleImageChange} />
      </form>
      <div className="image-preview">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`preview ${index}`} className="thumbnail" />
        ))}
      </div>
    </div>
  );
}

export default App;
