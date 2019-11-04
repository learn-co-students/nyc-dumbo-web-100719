class HolidaysController < ApplicationController
  
  # get /holidays
  def index
    # model
    @holidays = Holiday.all
    # render :index
  end

  # todo later!
  def show
    @holiday
    byebug
  end

  def new
    @holiday = Holiday.new
    # render :new
  end

  # post /holidays
  def create
    holiday_params = params.require(:holiday).permit(:name, :date, :description, :gifts_needed)
    holiday = Holiday.create(holiday_params)
    # render/redirect?
    # redirect_to @holiday
    redirect_to holiday_path(holiday)
  end 

end
