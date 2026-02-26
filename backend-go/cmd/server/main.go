package main

import (
	"net/http"

	"github.com/gin-gonic/gin"
	// Thay đổi đường dẫn này đúng với module name trong file go.mod của bạn
	"github.com/Helianthusss/Gopher-Vision-Hub/backend/internal/transport/http/handler"
)

func main() {
	r := gin.Default()

	// 1. Middleware xử lý CORS
	r.Use(func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}
		c.Next()
	})

	// 2. Định nghĩa các Routes (Phải nằm TRƯỚC r.Run)
	r.GET("/api/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"status":  "success",
			"message": "Backend Go is Online 🚀",
		})
	})

	// Route upload video
	r.POST("/api/v1/videos/upload", handler.UploadVideo)

	// 3. Khởi chạy Server (Luôn nằm cuối cùng)
	r.Run(":8080")
}
