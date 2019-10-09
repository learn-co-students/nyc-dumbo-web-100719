class Tweet

  @@all = []

  attr_reader :message, :user#, :username

  def initialize(message, user)
    @message = message
    @user = user

    @@all << self # self is tweet instance
  end

  # def username
  #   @username
  # end

  # instance method
  def username
    # @user.username
    self.user.username # self is the tweet instance
  end

  # Class method
  def self.all # self is the tweet class
    @@all
  end


end
