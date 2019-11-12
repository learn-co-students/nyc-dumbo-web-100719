class SessionsController < ApplicationController
  skip_before_action :authorized, only: [:new, :create]

  def reset
    session[:page_views_remaining] = 5

    # response/redirect?
    # redirect_to holidays_path
    redirect_back(fallback_location: holidays_path)
  end

  def new
    # render :new
  end

  def create
    # find the user with their username
    user = User.find_by(username: params[:session][:username])
    # compare the password to something in the database
    if user && user.authenticate(params[:session][:password])
      # if the password is correct, save user_id to session
      session[:user_id] = user.id
      redirect_to holidays_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to login_path
    end
  end

  def destroy
    session.delete(:user_id)
    redirect_to login_path
  end
end