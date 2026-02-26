import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { Upload, Video, CheckCircle, Activity } from 'lucide-react';

function App() {
  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    // Kiểm tra kết nối với Backend
    axios.get('http://localhost:8080/api/ping')
      .then(res => setStatus(res.data.message))
      .catch(() => setStatus("Backend Offline ❌"));
  }, []);

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

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8 font-sans">
      {/* Các phần khác của Dashboard ... */}
      
      <div className="md:col-span-1 bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
        <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Upload className="text-cyan-400" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Upload Video</h2>
        <p className="text-slate-400 text-sm mb-6">Tải lên video ngắn để bắt đầu phân tích.</p>
        
        {/* Phần input được bọc trong fragment để tránh lỗi Adjacent JSX */}
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
            className="w-full block bg-cyan-600 hover:bg-cyan-500 text-white font-medium py-2 rounded-lg cursor-pointer transition-colors"
          >
            Select File
          </label>
        </>
      </div>

      {/* Các phần khác của Dashboard ... */}
    </div>
  );
}

export default App;