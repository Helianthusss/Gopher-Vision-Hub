# 🐹 Gopher-Vision Hub

**Gopher-Vision Hub** là một hệ sinh thái phân tích đa phương thức (Multimodal Analysis Ecosystem) tiên tiến. Hệ thống kết hợp hiệu suất xử lý vượt trội của **Golang** trong điều phối Backend và sức mạnh của **Python** trong việc thực thi các mô hình học sâu (Deep Learning).

Dự án tập trung giải quyết hai bài toán thực tế trọng tâm:
1. **Emotion Intelligence**: Phân loại cảm xúc người dùng trong các video ngắn (Sử dụng kiến trúc Transformer).
2. **Agri-Tech Vision**: Tự động phát hiện sâu bệnh trên cây trồng qua hình ảnh/video (Sử dụng kiến trúc CNN).

---

## 🏗️ Kiến trúc Hệ thống (System Architecture)

Dự án áp dụng mô hình **Microservices** và triển khai **Clean Architecture / Domain-Driven Design (DDD)** tại phía Backend để đảm bảo tính mở rộng và dễ bảo trì:

- **Frontend (React + Vite)**: Giao diện Dashboard hiện đại, hỗ trợ Dark Mode, tối ưu trải nghiệm upload và theo dõi kết quả thời gian thực.
- **Backend (Golang)**: Đóng vai trò là "Orchestrator" (Bộ điều phối). Xử lý xác thực, quản lý Database, điều phối file và giao tiếp với AI Service qua gRPC.
- **AI Service (Python)**: Service chuyên biệt thực thi các mô hình AI (Transformers & CNN) sử dụng PyTorch, trả về kết quả phân tích định dạng cấu trúc.

---

## 📂 Cấu trúc thư mục (Monorepo)

```text
Gopher-Vision-Hub/
├── backend-go/             # Golang Backend (DDD & Clean Architecture)
│   ├── cmd/server/         # Entry point (main.go)
│   ├── internal/           # Mã nguồn nghiệp vụ (Private)
│   │   ├── domain/         # Entities, Repository Interfaces (Lõi hệ thống)
│   │   ├── usecase/        # Điều phối logic nghiệp vụ
│   │   ├── infrastructure/ # Frameworks & Drivers (GORM, Redis, S3)
│   │   └── transport/      # Giao tiếp (HTTP/Gin, gRPC Handlers)
│   └── api/                # Định nghĩa Protocol Buffer (gRPC)
├── frontend-react/         # React Frontend (Vite + Tailwind CSS v4)
│   ├── src/features/       # Các module chức năng (Upload, Dashboard)
│   └── src/api/            # Cấu hình gọi API (Axios)
└── ai-service-python/      # AI Processing Service
    ├── models/             # Chứa trọng số mô hình AI (.pth)
    └── grpc_server/        # Thực thi gRPC Server
```

---

## 🛠️ Công nghệ sử dụng (Tech Stack)

### Frontend
| Thành phần | Công nghệ |
|---|---|
| Core | React.js (Vite) |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Networking | Axios |

### Backend (Go)
| Thành phần | Công nghệ |
|---|---|
| Framework | Gin Gonic |
| ORM | GORM (PostgreSQL) |
| RPC | gRPC / Protobuf |
| Auth | JWT (RS256) |

### AI Service (Python)
| Thành phần | Công nghệ |
|---|---|
| Framework | FastAPI / gRPC |
| Deep Learning | PyTorch |
| Computer Vision | OpenCV |

---

## 🚀 Hướng dẫn cài đặt (Installation)

### 1. Khởi động Backend (Go)

```bash
cd backend-go
go mod tidy
go run cmd/server/main.go
```

### 2. Khởi động Frontend (React)

```bash
cd frontend-react
npm install
npm run dev
```

### 3. Khởi động AI Service (Python)

```bash
cd ai-service-python
python -m venv venv
# Windows: venv\Scripts\activate
# Linux/macOS: source venv/bin/activate
pip install -r requirements.txt
python main.py
```

---

## 📈 Lộ trình phát triển (Roadmap)

- [x] Thiết lập cấu trúc Monorepo và kiến trúc Clean Architecture.
- [x] Xây dựng giao diện Dashboard với Tailwind v4 (Dark Mode).
- [ ] Hoàn thiện Layer Transport & Usecase cho tính năng Upload Video.
- [ ] Triển khai giao tiếp gRPC giữa Go và Python.
- [ ] Tích hợp PostgreSQL và lưu trữ Cloud (AWS S3).
- [ ] Container hóa toàn bộ hệ thống với Docker & Docker-Compose.

---

> © 2026 Helianthusss — Gopher-Vision Hub Project.