require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true # this will tell our application to look for the _method key in params
  end

  helpers do
    def link_to(text, url)
      "<a href='#{url}'>#{text}</a>"
    end


  end

  get "/" do
    erb :welcome
  end

end
