class Post < ApplicationRecord
  validates :title, :author, :post_id, :image, :permalink, presence: true
  validates :post_id, uniqueness: true
end
