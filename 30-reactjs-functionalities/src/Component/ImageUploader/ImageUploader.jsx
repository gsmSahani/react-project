import React, { useState } from "react";

const ImageUploader = () => {
  const [file, setFile] = useState(null);
  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };
  return (
    <>
      <input type="file" accept="image/*" onChange={handleFileUpload} />
      {file && <img src={URL.createObjectURL(file)} alt="image" className="h-52 w-52"/>}
    </>
  );
};

export default ImageUploader;
