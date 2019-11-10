module Giphy
  # The Adapter Pattern is a nice way to create API wrappers and make clean interfaces for working with outside APIs in our projects
  # https://github.com/infinum/rails-handbook/blob/master/Design%20Patterns/Adapters.md
  class Adapter
    BASE_URL = "https://api.giphy.com/v1/"

    attr_reader :connection

    def initialize
      # Faraday is a HTTP client like RestClient, see: https://lostisland.github.io/faraday/usage/
      # Set up our client so when we call Giphy::Adapter.new we can use it to make as many API calls as we'd like
      # We save it in an instance variable and set up an attr_reader to use this in other method calls
      @connection = Faraday.new(BASE_URL) do |conn|
        conn.request :url_encoded
        conn.adapter :net_http
      end
    end

    # This is the primary functionality of our adapter, it gives us an easy interface to interact with the Giphy API
    def search(term, rating="G")
      request("gifs/search", {
        q: term,
        rating: rating
      })
    end

    private

    # private method to send request and parse JSON
    # if we want to set up our adapter for other API requests, we can reuse this method
    def request(endpoint, params)
      # Giphy API requires an API key
      # Our API key is secret and we don't want it to be included in git repo and uploaded to Github
      # Our .gitignore file makes it so the .env file isn't tracked in our project
      # We're using the dotenv-rails gem to help hide information in a .env file
      # https://github.com/bkeepers/dotenv
      response = connection.get(endpoint, params.merge(api_key: ENV["GIPHY_API_KEY"]))
      JSON.parse(response.body)
    end

  end
end