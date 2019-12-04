class ToysController < ApplicationController

  def likes
    @toy = Toy.find(params[:id])
    # Like.create(toy: @toy)

    new_number = @toy.likes + 1
    @toy.update(likes: new_number)
    render json: @toy
  end

  def destroy
    @toy = Toy.find(params[:id])
    @toy.destroy
    render json: {message: "It has been deleted"}
  end

end
