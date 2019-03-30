class AddTypeToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :post_id, :string
  end
end
