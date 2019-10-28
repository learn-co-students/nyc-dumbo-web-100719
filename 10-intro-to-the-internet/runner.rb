require 'sinatra'

get '/' do
  # respond
  "<h1>sup</h1>"
end

get '/sup' do
  "Hello World"
end

# if http_verb == "GET" && path == "/"
#   return "<h1>sup</h1>"
