class Message < ApplicationRecord
  belongs_to :user
  belongs_to :group

  validates :text, presence: true

  def latest_time
    created_at.to_s
  end
end
