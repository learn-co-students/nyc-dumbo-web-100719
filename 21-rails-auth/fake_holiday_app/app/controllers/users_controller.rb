class UsersController < ApplicationController

  def new
    @user = User.new
    # render :new
  end

  def create
    user_params = params.require(:user).permit(:username, :password)
    user = User.create(user_params)

    session[:user_id] = user.id

    # response/redirect?
    redirect_to holidays_path
  end
end
