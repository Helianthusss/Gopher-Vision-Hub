package handler

import (
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid" // Chạy go get github.com/google/uuid
)

func UploadVideo(c *gin.Context) {
	file, err := c.FormFile("video")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Không tìm thấy file"})
		return
	}

	// Tạo tên file duy nhất để tránh trùng lặp
	filename := uuid.New().String() + filepath.Ext(file.Filename)
	savePath := "./uploads/" + filename

	// Lưu file vào thư mục cục bộ (Tạm thời trước khi dùng Cloud)
	if err := c.SaveUploadedFile(file, savePath); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Không thể lưu file"})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message":  "Upload thành công!",
		"filename": filename,
	})
}
