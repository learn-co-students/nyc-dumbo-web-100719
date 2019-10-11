class User

  attr_reader :username, :age #, :tweets

  def initialize(username)
    # @tweets = []
    @username = username
    # @age = 27
  end

  def post_tweet(message)
    # binding.pry
    # tweet_instance = 
    Tweet.new(message, self)
  end

  def tweets
    Tweet.all.select do |tweet|
      tweet.user == self
    end
    # Tweet.all.select { |tweet| tweet.user == self }
  end

  # def repent_last_tweet
    
  # end

  # def tweets
  #   @tweets
  # end


  # def username
  #   @username
  # end


end

