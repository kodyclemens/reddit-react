class ChangePermalinkOnPosts < ActiveRecord::Migration[5.2]
  def change
    rename_column :posts, :post_permalink, :permalink
  end
end
