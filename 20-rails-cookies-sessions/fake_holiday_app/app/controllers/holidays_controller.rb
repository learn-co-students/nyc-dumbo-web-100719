class HolidaysController < ApplicationController
  before_action :set_holiday, only: [:show, :edit, :update, :destroy]
  
  # get /holidays
  def index
    # model
    @holidays = Holiday.all

    # response
    # render :index
  end

  # get /holidays/:id
  # set_holiday
  def show
    # render :show
  end

  # get /holidays/new
  def new
    # model
    @holiday = Holiday.new

    # response
    # render :new
  end

  # post /holidays
  def create
    holiday = Holiday.create(holiday_params)
    # render/redirect?
    # redirect_to @holiday
    redirect_to holiday_path(holiday)
  end 

  # get /holidays/:id/edit
  # set_holiday
  def edit
    # model
    

    # reponse
    # render :edit
  end

  # patch (or put) /holidays/:id
  # set_holiday
  def update
    # model
    @holiday.update(holiday_params)

    if @holiday.valid?
      redirect_to @holiday
    else
      flash[:bad_job] = @holiday.errors.full_messages
      redirect_to "/holidays/#{@holiday.id}/edit"
    end

    # response
  end

  # delete /holidays/:id
  # set_holiday
  def destroy
    # model
    @holiday.destroy

    # response
    redirect_to holidays_path
  end

  private

  def holiday_params
    params.require(:holiday).permit(:name, :date, :description, :gifts_needed)
  end

  def set_holiday
    @holiday = Holiday.find(params[:id])
  end

end
