class Holiday < ApplicationRecord
  has_many :parties, dependent: :destroy

  # name has to be there
  # gifts needed, must be true or false
  # description, less than 100 characters, or more than 50
  
  # name for a holiday has to include 'day'
  validate :name_must_include_day
 
  def name_must_include_day
    if !name.include?("day")
      errors.add(:name, "must include the word 'day'")
    end
  end


  def name_with_description
    "#{self.name} #{self.description}"
  end
end
