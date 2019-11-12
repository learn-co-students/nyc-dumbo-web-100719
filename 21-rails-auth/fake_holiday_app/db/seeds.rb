Holiday.destroy_all

# We can keep our original holidays
Holiday.create([
  { name: "Tax Refund Day", date: "April 16", description: "Just got paid 💵💵💵", gifts_needed: true },
  { name: "Selfie Sunday", date: "Every Sunday", description: "Feelin myself", gifts_needed: true },
  { name: "Nicky's Birthday", date: "June 5", description: "the best day of the year!", gifts_needed: true }
])

# But I also found a calendar with fake holidays
# https://www.atlasobscura.com/articles/the-complete-calendar-plugin-of-the-worlds-fictional-holidays
# Let's scrape it to create seed data!

# Open a file or pass a string to the parser
calendar_file = File.open(File.join(Rails.root, 'db', 'data', 'fake-holidays.ics'))

# parse the calendar using icalendar gem
# https://github.com/icalendar/icalendar
calendar = Icalendar::Calendar.parse(calendar_file).first

# Iterate through each event in the calendar
calendar.events.each do |event|
  if event.summary.length > 0
    # pull out title and source from summary
    name, source = event.summary.match(/(.*)\((.*)\)/).captures
    Holiday.create(
      name: name, 
      source: source, 
      date: event.dtstart.strftime("%B %-d"), 
      description: 
      event.description, 
      gifts_needed: rand(0..1)
    )
  end
end

30.times do
  User.create(username: Faker::Name.first_name.downcase, password: "password123")
end

# let's add some parties too
Holiday.all.each do |holiday|
  begin
    date = Date.parse("#{holiday.date} 2019")
  rescue
    date = Faker::Date.forward(days: 365)
  end
  rand(1..3).times do
    holiday.parties.create(
      name: "#{Faker::Name.first_name}'s #{holiday.name} Party",
      location: Faker::Address.full_address, 
      date: date,
      headcount: rand(0..100),
      user: User.order("RANDOM()").first
    )
  end
end