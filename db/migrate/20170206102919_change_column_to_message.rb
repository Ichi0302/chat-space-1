class ChangeColumnToMessage < ActiveRecord::Migration[5.0]
  def change
    def up
      change_column :messages, :text, null: true
    end

    def down
      change_column :messages, :text, null: false
    end
  end
end
