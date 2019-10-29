require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  # TODO: show a list of all events
  get "/events" do
    # get all the events
    @events = Event.all
    
    # make them into HTML
    # str = ""
    # events.each do |event|
    #   str += event.name
    # end
    # str
    # send a response
    # @title = "All Events"

    erb :"events/index"
  end

  # TODO: show a single event

end
