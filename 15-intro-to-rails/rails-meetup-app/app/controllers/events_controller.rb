class EventsController < ApplicationController

  # show a list of all events
  # get "/events" do
  #   # get all the events
  #   @events = Event.all
    
  #   # render the view
  #   erb :"events/index"
  # end
  def index
    # byebug
    # model
    @events = Event.all

    # response
    # render :index
  end

  # get '/events/:id' do
  #   # model?
  #   @event = Event.find(params[:id])

  #   # response?
  #   erb :"events/show"
  # end

  def show
    # model
    @event = Event.find(params[:id])
    # response
    # render :show
  end

end
