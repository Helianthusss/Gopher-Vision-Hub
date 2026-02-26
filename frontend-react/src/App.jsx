const handleFileUpload = async (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const formData = new FormData();
  formData.append('video', file);

  try {
    const response = await axios.post('http://localhost:8080/api/v1/videos/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
    alert("Thành công: " + response.data.message);
  } catch (error) {
    console.error("Lỗi upload:", error);
    alert("Upload thất bại!");
  }
};

<>
  <input 
    type="file" 
    id="video-upload" 
    className="hidden" 
    onChange={handleFileUpload} 
    accept="video/*"
  />
  <label 
    htmlFor="video-upload" 
    className="w-full block text-center bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-lg cursor-pointer transition-colors"
  >
    Select File
  </label>
</>