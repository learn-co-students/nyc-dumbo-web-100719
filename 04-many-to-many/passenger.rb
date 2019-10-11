class Passenger

  @@all = []

  attr_reader :name

  def initialize(name)
    # @tickets = [] #secondary source of truth 🙅‍♀️
    @name = name
    @@all << self
  end

  def tickets
    # p @tickets
    Ticket.all.select do |ticket|
      ticket.passenger == self
    end
  end

  def flights
    self.tickets.map do |ticket|
      ticket.flight
    end
  end

  def flight_destination_airport_codes
    self.flights.map(&:destination_airport_code)
  end

  def self.all
    @@all
  end

  def self.all_names
    self.all.map do |passenger|
      passenger.name
    end
  end

end

