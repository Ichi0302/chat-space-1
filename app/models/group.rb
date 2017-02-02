class Group < ApplicationRecord
  has_many :groupusers
  has_many :users, through: :groupusers
end
