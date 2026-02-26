import grpc
from concurrent import futures
import time

# Sau này chúng ta sẽ generate file từ proto, tạm thời viết logic giả lập
def analyze_video(video_path):
    print(f"Đang phân tích video: {video_path}")
    # Giả lập model Transformer xử lý
    return {"label": "Happy/Healthy", "confidence": 0.95}

if __name__ == "__main__":
    print("AI Service đang đợi lệnh từ Go...")
    # Logic khởi chạy gRPC server sẽ nằm ở đây