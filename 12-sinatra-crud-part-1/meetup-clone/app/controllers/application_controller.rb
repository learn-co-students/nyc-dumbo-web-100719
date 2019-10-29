require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end

  # show a list of all events
  get "/events" do
    # get all the events
    @events = Event.all
    
    # render the view
    erb :"events/index"
  end

  # TODO: show a single event

end
