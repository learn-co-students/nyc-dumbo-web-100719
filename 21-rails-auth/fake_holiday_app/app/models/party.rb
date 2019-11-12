class Party < ApplicationRecord
  belongs_to :holiday
  belongs_to :user
  
  validates :name, presence: true
  validates :headcount, numericality: { greater_than: 0 }

  
end
