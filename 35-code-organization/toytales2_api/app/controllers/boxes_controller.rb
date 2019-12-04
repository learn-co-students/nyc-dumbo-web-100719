class BoxesController < ApplicationController

  def index
    render json: Box.all, include: [:toys]
  end

end
