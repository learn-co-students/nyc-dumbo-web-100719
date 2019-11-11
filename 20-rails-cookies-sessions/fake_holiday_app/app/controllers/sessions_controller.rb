class SessionsController < ApplicationController

  def reset
    session[:page_views_remaining] = 5

    # response/redirect?
    # redirect_to holidays_path
    redirect_back(fallback_location: holidays_path)
  end

end