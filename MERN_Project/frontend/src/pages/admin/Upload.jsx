import { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview("");
  };

  const handleUpload = () => {
    if (!image) {
      alert("Please select an image first.");
      return;
    }

    alert("Frontend Completed! Backend Upload Coming Next.");
  };

  return (
    <div className="p-8">
      {/* Header */}
      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Upload Image
      </h1>

      <p className="text-slate-500 mb-8">
        Select and preview an image before uploading.
      </p>

      {/* Upload Card */}
      <div className="bg-white rounded-xl shadow-md border border-slate-200 p-6 max-w-xl">

        {/* File Input */}
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Choose Image
        </label>

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full border border-slate-300 rounded-lg p-2"
        />

        {/* Preview */}
        {preview && (
          <div className="mt-6">
            <h3 className="font-semibold text-slate-700 mb-2">
              Image Preview
            </h3>

            <img
              src={preview}
              alt="Preview"
              className="w-64 h-64 object-cover rounded-lg border"
            />
          </div>
        )}

        {/* File Name */}
        {image && (
          <div className="mt-4">
            <p className="text-slate-700">
              <span className="font-semibold">File:</span> {image.name}
            </p>

            <p className="text-slate-500 text-sm">
              {(image.size / 1024).toFixed(2)} KB
            </p>
          </div>
        )}

        {/* Buttons */}
        <div className="flex gap-4 mt-6">

          <button
            onClick={handleUpload}
            className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition"
          >
            Upload Image
          </button>

          <button
            onClick={removeImage}
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-black-600 transition"
          >
            Remove
          </button>

        </div>

      </div>
    </div>
  );
};

export default Upload;