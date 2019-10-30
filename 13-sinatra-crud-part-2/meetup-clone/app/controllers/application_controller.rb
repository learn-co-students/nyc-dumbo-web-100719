require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
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

  get '/events/:id/edit' do
    # model
    @event = Event.find(params[:id])
    # response
    erb :"events/edit"
  end

  put '/events/:id' do
    # find the instance of the event
    event = Event.find(params[:id])
    # perform an update on the instance using params
    # make sure it saves!
    event.update(params[:event])

    # response
    redirect "/events/#{event.id}"
  end

  # {
  #   "_method"=>"PUT",
  #   "id"=>"5",
  #   "event" => {
  #     "name"=>"something",
  #     "location"=>"somewhere",
  #     "date"=>"sometime",
  #     "headcount"=>"1"
  #   }
  # }

end
