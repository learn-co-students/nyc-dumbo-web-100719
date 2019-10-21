Author.destroy_all
Book.destroy_all

#good omens
@neil_gaiman = Author.create(name: "Neil Gaiman", birth_year: 1960)
@terry_pratchett = Author.create(name: "Terry Pratchett", birth_year: 1948)

@good_omens = Book.create(title: "Good Omens", pages: 288)
@good_omens.authors << @neil_gaiman
@good_omens.authors << @terry_pratchett

#reaper man
@reaper_man = Book.create(title: "Reaper Man", pages: 352, authors: [@terry_pratchett])

#heads you lose
@lisa_lutz = Author.create(name: "Lisa Lutz", birth_year: 1970)
@david_hayward = Author.create(name: "David Hayward", birth_year: 1880)

@heads_you_lose = Book.create(title: "Heads You Lose", pages: 156)
@heads_you_lose.authors << @lisa_lutz
@heads_you_lose.authors << @david_hayward

#between the lines
@jodi_picoult = Author.create(name: "Jodi Picoult", birth_year: 1966)
@samantha_van_leer = Author.create(name: "Samantha van Leer", birth_year: 1880)

@between_the_lines = Book.create(title: "Between the Lines", pages: 355)
@between_the_lines.authors << @jodi_picoult
@between_the_lines.authors << @samantha_van_leer

#the cinderella murder
@mary_higgins_clark = Author.create(name: "Mary Higgins Clark", birth_year: 1927)
@alafair_burke = Author.create(name: "Alafair Burke", birth_year: 1969)

@the_cinderella_murder = Book.create(title: "The Cinderella Murder", pages: 320)
@the_cinderella_murder.authors << @mary_higgins_clark
@the_cinderella_murder.authors << @alafair_burke

#why we broke up
@daniel_handler = Author.create(name: "Daniel Handler", birth_year: 1970)
@maira_kalman = Author.create(name: "Maira Kalman", birth_year: 1949)

@why_we_broke_up = Book.create(title: "Why We Broke Up", pages: 384)
@why_we_broke_up.authors << @daniel_handler
@why_we_broke_up.authors << @maira_kalman

#the talisman
@stephen_king = Author.create(name: "Stephen King", birth_year: 1947)
@peter_straub = Author.create(name: "Peter Straub", birth_year: 1943)

@the_talisman = Book.create(title: "The Talisman", pages: 921)
@the_talisman.authors << @stephen_king
@the_talisman.authors << @peter_straub

#the shining
@the_shining = Book.create(title: "The Shining", pages: 447, authors: [@stephen_king])

#s
@j_j_abrams = Author.create(name: "J.J. Abrams", birth_year: 1966)
@doug_dorst = Author.create(name: "Doug Dorst", birth_year: 1880)

@s = Book.create(title: "S.", pages: 472)
@s.authors << @j_j_abrams
@s.authors << @doug_dorst

#dash and lily's book of dares
@rachel_cohn = Author.create(name: "Rachel Cohn", birth_year: 1968)
@david_levithan = Author.create(name: "David Levithan", birth_year: 1972)

@dash_lilys_book_of_dares = Book.create(title: "Dash & Lily's Book of Dares", pages: 257)
@dash_lilys_book_of_dares.authors << @rachel_cohn
@dash_lilys_book_of_dares.authors << @david_levithan

#relic
@douglas_preston = Author.create(name: "Douglas Preston", birth_year: 1956)
@lincoln_child = Author.create(name: "Lincoln Child", birth_year: 1957)

@relic = Book.create(title: "Relic", pages: 481)
@relic.authors << @douglas_preston
@relic.authors << @lincoln_child

puts "done!"
