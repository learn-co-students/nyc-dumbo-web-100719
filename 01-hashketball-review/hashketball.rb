require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson" => {
          name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        },
        "Reggie Evans" => {
          name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        },
        "Brook Lopez" => {
          name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        },
        "Mason Plumlee" => {
          name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        },
        "Jason Terry" => {
          name:  "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      }
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien" => {
          name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        },
        "Bismak Biyombo" => {
          name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        },
        "DeSagna Diop" => {
          name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        },
        "Ben Gordon" => {
          name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        },
        "Brendan Haywood" => {
          name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      }
    }
  }
end



def all_players
  game_hash[:away][:players].values + game_hash[:home][:players].values
end

def find_player_hash(player_name)
  all_players.find do |player|
    player_name == player[:name]
  end
end

def num_points_scored(player_name)
  # game_hash[:home][:players][player_name][:points]

  # get the players from both teams

  # figure out which player we actually care about
    # compare player_name argument here?
  # Get points from player and return them
  find_player_hash(player_name)[:points]

end

def shoe_size(player_name)
  find_player_hash(player_name)[:shoe]
end


# # # EXERCISE:
# # # Define a method called get_names that takes an array of instructors
# # # and returns just their names.
# instructors = [
#   { name: 'Graham', hometown: 'Oak Park, IL', mood: 'excited' },
#   { name: 'Annie', hometown: 'Salvador da Bahia' },
#   { name: 'Randy', hometwon: 'Teh Bronx' }
# ]

# def get_names(instructors)
  # instructor_names = []  

  # instructors.each do |instructor_hash|
  #   instructor_names << instructor_hash[:name]
  # end

  # instructor_names

  # instructors.find do |instructor_hash|
  #   instructor_hash[:name].include?("n")
  # end
# end


# p get_names(instructors)


# def get_players
#
# end



# # EXERCISE
# # What do the following return?

# arr = (1..100).to_a

# arr.find_all do |num|
#   num.even?
# end



# arr.select do |num|
#   7
# end








