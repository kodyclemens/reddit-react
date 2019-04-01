class AddCheersToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :cheers, :integer, default: 1
  end
end
