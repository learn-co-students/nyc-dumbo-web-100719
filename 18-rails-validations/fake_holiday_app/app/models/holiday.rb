class Holiday < ApplicationRecord
  has_many :parties, dependent: :destroy

  def name_with_description
    "#{self.name} #{self.description}"
  end
end
