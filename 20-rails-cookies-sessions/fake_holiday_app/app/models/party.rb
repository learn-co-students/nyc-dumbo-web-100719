class Party < ApplicationRecord
  belongs_to :holiday
  
  validates :name, presence: true
  validates :headcount, numericality: { greater_than: 0 }

  
end
