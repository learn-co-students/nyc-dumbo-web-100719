20.times do
  Event.create(
    name: "#{Faker::Company.buzzword} #{Faker::Hacker.ingverb} #{Faker::ProgrammingLanguage.name}",
    date: Faker::Date.forward(days: 50),
    location: Faker::Address.full_address,
    headcount: rand(10..100)
  )
end