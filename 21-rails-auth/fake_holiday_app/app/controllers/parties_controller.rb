class PartiesController < ApplicationController
  before_action :set_party, only: [:show, :edit, :update, :destroy]

  # get /parties/:id
  def show
    # render :show
  end

  # get /parties/new
  def new
    # model
    @party = Party.new
    @holidays = Holiday.all

    # response
    # render :new
  end

  # post /parties
  def create
    # model
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
  end

  def edit
    @holidays = Holiday.all
  end

  def update
    @party.update(party_params)

    if @party.valid?
      @party.save
      flash[:pat_on_the_back] = "Yay thx for filling it out well!"
      # response
      redirect_to @party.holiday
    else
      # response
      # @errors = @party.errors.full_messages
      flash[:errors] = @party.errors.full_messages
      redirect_to edit_party_path(@party)
    end
  end

  def destroy
    @party.destroy
    redirect_to @party.holiday
  end

  private

  def set_party
    @party = Party.find(params[:id])
  end

  def party_params
    params.require(:party).permit(:name, :location, :date, :headcount, :holiday_id)
  end
end
