class Book < ActiveRecord::Base

  has_many :authorships
  has_many :authors, through: :authorships

  def pretty_print
    self.title.blue + " - " + self.authors.map(&:name).join(", ")
  end

end