class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :subreddit
      t.string :author
      t.string :title
      t.text :post_text
      t.string :post_link
      t.string :image
      t.string :image_thumbnail
      t.string :post_permalink
      t.timestamps
    end
  end
end
