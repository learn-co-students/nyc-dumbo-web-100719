class EventsController < ApplicationController

  get "/events" do
    @events = Event.all

    erb :"events/index"
  end 

  get "/events/new" do
    erb :"events/new"
  end



end
