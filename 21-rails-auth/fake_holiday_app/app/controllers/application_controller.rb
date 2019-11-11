class ApplicationController < ActionController::Base
  before_action :set_page_view

  private
  
  def set_page_view
    # if session[:page_views_remaining] == nil
    #   session[:page_views_remaining] = 5
    # end
    session[:page_views_remaining] ||= 5
  end
end
