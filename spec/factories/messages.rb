FactoryGirl.define do

  factory :message do
    text         "test message"
    image        "test image"
    user_id       1
    group_id      1
    Faker::Time.between(DateTime.now - 1, DateTime.now)
  end

end