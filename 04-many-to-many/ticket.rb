class Ticket

  @@all = []

  attr_reader :passenger, :flight

  def initialize(passenger, flight)
    @passenger = passenger
    @flight = flight

    @@all << self # self is the ticket instance
  end

  def self.all # self is the Ticket class
    @@all
  end

end

