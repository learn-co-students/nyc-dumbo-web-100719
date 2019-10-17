class Cat < Animal
  
  def initialize(name, override_sound = nil)
    super(name + "uffikins")
    @num_lives = 9
    if override_sound
      @sound = override_sound
    else
      @sound = "Meow"
    end
  end

  def die
    @num_lives -= 1
    return super if @num_lives <= 0
  end
end
