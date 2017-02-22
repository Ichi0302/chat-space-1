class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWave::RMagick

  case Rails.env
  when 'development'
    storage :file
  when 'production'
    storage :fog
  end

  process resize_to_limit: [400, 400]
  process convert: 'jpg'

  def store_dir
    "uploads/photos/"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

end
