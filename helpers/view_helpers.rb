module ViewHelpers
  def portrait
    image_tag lorem.image('300x300'), :class => "portrait"
  end

  def gravatar_url_for(email, size=300)
    hash = Digest::MD5.hexdigest(email)
    image_tag "http://gravatar.com/avatar/#{hash}?s=#{size}", :class => "portrait"
  end

  def twitter_link(title)
    encoded_title = URI.encode(title)
    twitter_text = "whatis#{title}".gsub(/\#/, '').downcase
    "https://twitter.com/search?q=#{encoded_title}%20OR%20%23#{twitter_text}&src=typd"
  end
end
