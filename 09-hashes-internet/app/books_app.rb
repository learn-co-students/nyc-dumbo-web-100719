class BooksApp

  def self.run
    
    puts "Hello and welcome to book app!".yellow
    selection = prompt.select("What do you want to do?", [
      { name: 'List all books', value: 1 },
      { name: 'Create new book', value: 2 },
      { name: 'Search books', value: 3 },git 
      { name: 'Exit', value: 4 }
    ])
    if selection == 1
      list_books
    elsif selection == 2
      create_book
    elsif selection == 3
      search_books
    elsif selection == 4
      return
    end
  end

  def self.list_books
    puts Book.all.map(&:pretty_print)
    run
  end

  def self.create_book
    puts "What is the title of the book?".yellow
    title = STDIN.gets.chomp
    book = Book.find_or_create_by(title: title)
    puts "How many pages are in the book?".yellow
    book.pages = STDIN.gets.chomp.to_i
    book.save
    first_time = true
    while prompt.yes?("Do you want to add #{ first_time ? "an" : "another" } author?")
      first_time = false
      puts "What is the name of the author who you want to add?".yellow
      author = Author.find_or_create_by(name: STDIN.gets.chomp)
      book.authors << author
    end
    run
  end

  def self.search_books
    puts "What would you like to search for?".yellow
    search_term = STDIN.gets.chomp
    response = HTTParty.get('https://www.googleapis.com/books/v1/volumes?q=' + search_term)
    smaller_hashes = response["items"].map do |book_hash|
      {
        id: book_hash["id"],
        title: book_hash["volumeInfo"]["title"],
        authors: book_hash["volumeInfo"]["authors"] || [], # if there are no authors, an empty array will prevent errors
        pages: book_hash["volumeInfo"]["pageCount"],
      }
    end

    choices_for_selection = smaller_hashes.map do |book_hash|
      {
        value: book_hash[:id],
        name: book_hash[:title],
      }
    end

    choices_for_selection.push({
      name: "Never mind!",
      value: nil
    })

    book_id = prompt.select("Which book should we save?", choices_for_selection)

    return run unless book_id # back to main menu

    book_hash = smaller_hashes.find do |book_hash|
      book_hash[:id] == book_id
    end

    authors = book_hash[:authors].map do |author_name|
      Author.find_or_create_by(name: author_name)
    end 

    book = Book.find_or_create_by(title: book_hash[:title])

    authors.each do |author|
      book.authors << author
    end

    run
  end

  private

  def self.prompt
    @@prompt ||= TTY::Prompt.new
  end


end