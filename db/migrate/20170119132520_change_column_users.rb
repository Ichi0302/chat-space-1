class ChangeColumnUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :name, :string, :after => :id
    change_column :users, :email, :string, :after => :name
  end
end
