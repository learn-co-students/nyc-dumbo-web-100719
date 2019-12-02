class TeachersController < ApplicationController

  def index
    @teachers = Teacher.all
    render json: @teachers
  end

  def show
    @teacher = Teacher.find(params[:id])
    render json: @teacher
    # only: [:id, :name, :subject], include: {classrooms: {only: [:id, :name], include: {assignments: {only: [:id, :name]}}}}
  end








  def create
    @teacher = Teacher.create(teacher_params)
    if @teacher.valid?
      render json: @teacher
    else
      render json: {errors: @teacher.errors.full_messages}
    end
  end


  private

  def teacher_params
    params.permit(:name, :subject)
    # params.require(:teacher).permit(:name, :subject)
  end

  # fetch("http:localhost:3000/teachers", {
  # method: "POST",
  # body: JSON.stringify({
  #   name: "teacher name",
  #   subject: "teacher subject"
  # }),
  # headers: {
  #   'content-type': 'application/json'
  # }
  # })
















end
