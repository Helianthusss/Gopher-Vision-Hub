package entity

import "time"

type Video struct {
	ID        string    `json:"id" gorm:"primaryKey"`
	Title     string    `json:"title"`
	FilePath  string    `json:"file_path"`
	Status    string    `json:"status"` // pending, processing, completed
	CreatedAt time.Time `json:"created_at"`
}
