package repositories

import (
	"errors"
	"server/controller/services"
	"server/models"
	"server/util"

	"github.com/jinzhu/gorm"
)

type myRichTextBlockRepositoryImpl struct {
	config util.Config
	db     *gorm.DB
}

func NewMyRichTextBlockRepository(config util.Config, db *gorm.DB, userID uint) services.MyRichTextBlockRepository {
	res := &myRichTextBlockRepositoryImpl{
		config: config,
		//TODO:ユーザー指定しておくべきか検討
		db: db,
	}
	return res
}

func (u *myRichTextBlockRepositoryImpl) Create(data *models.MyRichTextBlock) (*models.MyRichTextBlock, error) {
	if err := u.db.Create(data).Error; err != nil {
		return nil, errors.New("ブロックの追加に失敗しました")
	}
	return data, nil
}
func (u *myRichTextBlockRepositoryImpl) GetRichTextBlockByBlockID(blockID string) (*models.MyRichTextBlock, error) {
	myRichTextBlock := new(models.MyRichTextBlock)
	if err := u.db.Preload("MyRichText").Where(" my_block_id = ? ", blockID).Find(myRichTextBlock).Error; err != nil {
		return nil, errors.New("ブロックの追加に失敗しました")
	}
	return myRichTextBlock, nil
}
