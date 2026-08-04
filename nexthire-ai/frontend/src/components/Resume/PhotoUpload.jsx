import "./PhotoUpload.css";

function PhotoUpload({ photo, setPhoto }) {
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="photo-upload">
      <label className="upload-btn">
        Upload Profile Photo

        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
          hidden
        />
      </label>
    </div>
  );
}

export default PhotoUpload;