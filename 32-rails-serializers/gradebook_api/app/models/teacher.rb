class Teacher < ApplicationRecord
  has_many :classrooms
  has_many :assignments, through: :classrooms

  def professor_name
    "Dr. #{self.name}"
  end

  def hidden_name
    self.name
  end

end
