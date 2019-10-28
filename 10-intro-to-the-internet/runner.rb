require 'sinatra'

# requests
get '/' do
  # respond
  "<h1>sup</h1>"
end

# requests
get '/sup' do
  "Hello World"
end

# requests
get '/search' do
  # look something up in the database
  # format some HTML page 
  # send that as the response
end

# requests
post '/kittens' do
  # add a kitten to the database
  # send some response
end


# if http_verb == "GET" && path == "/"
#   return "<h1>sup</h1>"
