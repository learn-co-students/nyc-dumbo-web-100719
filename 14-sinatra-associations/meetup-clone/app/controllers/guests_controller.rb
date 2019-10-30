class GuestsController < ApplicationController

  get '/guests/new' do
    # model
    @events = Event.all

    # response
    erb :"guests/new"
  end

  post '/guests' do
    guest = Guest.create(params)

    # response?
    redirect "events/#{guest.event.id}"
  end

end