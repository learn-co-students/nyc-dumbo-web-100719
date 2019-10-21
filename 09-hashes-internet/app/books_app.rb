class BooksApp

  def self.run
    prompt = TTY::Prompt.new
    puts "Hello and welcome to book app!".yellow
    selection = prompt.select("What do you want to do?", [
      { name: 'List all books', value: 1 },
      { name: 'Create new book', value: 2 },
      { name: 'Search books', value: 3 }
    ])
    if selection == 1
      list_books
    elsif selection == 2
      create_book
    elsif selection == 3
      search_books
    end
  end

  def self.list_books
    puts Book.all.map(&:pretty_print)
  end

  def self.create_book

  end

  def self.search_books
    response = HTTParty.get('https://www.googleapis.com/books/v1/volumes?q=kittens')
    puts response["items"].first["volumeInfo"]["title"]
    binding.pry
  end


end