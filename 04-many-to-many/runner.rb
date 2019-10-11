require 'pry'

require_relative 'flight'
require_relative 'passenger'
require_relative 'ticket'

aniece = Passenger.new("Aniece")
gene = Passenger.new("Gene")
brianna = Passenger.new("Brianna")

costa_rica = Flight.new("JFK", "SJO")
sydney = Flight.new("JFK", "SYD")
paris = Flight.new("LGA", "CDG")
cali = Flight.new("JFK", "BUR")
amsterdam = Flight.new("EWR", "AMS")
tokyo = Flight.new("LGA", "HND")

Ticket.new(aniece, costa_rica)
Ticket.new(aniece, sydney)
Ticket.new(aniece, amsterdam)
Ticket.new(gene, paris)
Ticket.new(gene, cali)
Ticket.new(brianna, amsterdam)
Ticket.new(brianna, paris)
Ticket.new(brianna, tokyo)


binding.pry

false
