class PartiesController < ApplicationController

  def new
    # model?
    @party = Party.new

    # response
    # render :new
  end

  def create
    # model
    party_params = params.require(:party).permit(:location, :date, :headcount, :holiday_id)
    party = Party.create(party_params)

    # response
    # redirect_to holiday_path(party.holiday)
    redirect_to party.holiday
  end

end
