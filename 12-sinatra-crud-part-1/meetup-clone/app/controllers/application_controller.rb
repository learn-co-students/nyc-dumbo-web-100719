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

  # show a single event
  # get '/events/1' do
  #   # model?
  #   @event = Event.find(1)

  #   # response?
  #   erb :"events/show"
  # end

  # get '/events/2' do
  #   # model?
  #   @event = Event.find(2)

  #   # response?
  #   erb :"events/show"
  # end
  get '/events/new' do
    erb :"events/new"
  end

  get '/events/:id' do
    # model?
    @event = Event.find(params[:id])

    # response?
    erb :"events/show"
  end

  post '/events' do
    # model, create a new Event
    @event = Event.create(params)

    # respond
    redirect "/events/#{@event.id}"

    # erb :"events/show"
  end


end
