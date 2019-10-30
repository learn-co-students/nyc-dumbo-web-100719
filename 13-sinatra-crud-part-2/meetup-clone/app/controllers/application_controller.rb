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

  # create an event
  get '/events/new' do

    # response
    erb :"events/new"
  end

  post '/events' do
    # model
    @event = Event.create(params)

    # response
    redirect "/events/#{@event.id}"
  end

  # show a single event
  get '/events/:id' do
    # model
    @event = Event.find(params[:id])

    # response
    erb :"events/show"
  end

end
