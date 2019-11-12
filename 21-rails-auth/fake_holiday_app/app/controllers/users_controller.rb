class UsersController < ApplicationController

  def new
    @user = User.new
    # render :new
  end

  def create
    user_params = params.require(:user).permit(:username, :password)
    user = User.create(user_params)

    if user.valid?
      session[:user_id] = user.id

      # response/redirect?
      redirect_to holidays_path
    else
      flash[:errors] = user.errors.full_messages
      redirect_to signup_path
    end

  end
end
