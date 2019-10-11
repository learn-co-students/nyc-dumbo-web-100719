require 'pry'
require_relative 'models/user'
require_relative 'models/tweet'

common_squirrel = User.new("common_squirrel")
coffee_dad = User.new("coffee_dad")

first_tweet = common_squirrel.post_tweet("stare")
second_tweet = common_squirrel.post_tweet("sleep")
third_tweet = coffee_dad.post_tweet("having coffee")
fourth_tweet = coffee_dad.post_tweet("drinking coffee")
fifth_tweet = coffee_dad.post_tweet("death is nigh")

# first_tweet = Tweet.new("stare", common_squirrel)
# second_tweet = Tweet.new("sleep", common_squirrel)
# third_tweet = Tweet.new("having coffee", coffee_dad)
# fourth_tweet = Tweet.new("drinking coffee", coffee_dad)
# fifth_tweet = Tweet.new("death is nigh", coffee_dad)

# Tweet.all

binding.pry


