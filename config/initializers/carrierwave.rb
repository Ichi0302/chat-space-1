CarrierWave.configure do |config|
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: ENV['ACCESS_KEY_ID'],
    aws_secret_access_key: ENV['SECRET_ACCESS_KEY'],
    region: 'us-east-1'
  }

    case Rails.env
    when 'development'
        config.fog_directory  = 'chat-space-app'
        config.asset_host = 'https://s3.amazonaws.com/chat-space-app'
    when 'production'
        config.fog_directory  = 'chat-space-app'
        config.asset_host = 'https://s3.amazonaws.com/chat-space-app'
    end
end
