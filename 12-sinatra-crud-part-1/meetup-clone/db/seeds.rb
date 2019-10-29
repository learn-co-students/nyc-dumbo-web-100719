Event.destroy_all

subjects = [
  "Ruby",
  "Sinatra",
  "Rails",
  "ActiveRecord",
  "SQL",
  "Javascript",
  "React",
  "Redux"
]

connectors = [ "in", "with", "using" ]

20.times do
  Event.create(
    name: "#{Faker::Company.buzzword.capitalize} #{Faker::Hacker.ingverb.capitalize} #{connectors.sample} #{subjects.sample}",
    date: Faker::Date.forward(days: 50),
    location: Faker::Address.full_address,
    headcount: rand(10..100)
  )
end