class Animal

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def speak
    "#{ @sound }!!!!!"
  end

  def die
    "urk."
  end


end

