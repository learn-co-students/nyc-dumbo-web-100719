class Dog < Animal

  def initialize(name)
    super
    @sound = "Woof"
  end

  def inspect
    self.to_s
  end

  def to_s
    "🐕#{ self.class.name }:#{ self.object_id }🐩"
  end

end
