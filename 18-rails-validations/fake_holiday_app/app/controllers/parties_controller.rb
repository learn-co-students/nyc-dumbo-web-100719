class PartiesController < ApplicationController

  # get /parties/:id
  def show
    # model
    @party = Party.find(params[:id])

    # response
    # render :show
  end

  # get /parties/new
  def new
    # model
    @party = Party.new
    @holidays = Holiday.all
    @errors = flash[:errors]

    # response
    # render :new
  end

  # post /parties
  def create
    # model
    party_params = params.require(:party).permit(:name, :location, :date, :headcount, :holiday_id)
    @party = Party.new(party_params)

    if @party.valid?
      @party.save
      flash[:pat_on_the_back] = "Yay thx for filling it out well!"
      # response
      redirect_to @party.holiday
    else
      # response
      # @errors = @party.errors.full_messages
      flash[:errors] = @party.errors.full_messages
      redirect_to "/parties/new"
    end

    # response
    # redirect_to holiday_path(party.holiday)
  end

end
