class Party < ApplicationRecord
  belongs_to :holiday

  # name has to be there
  # name has to be longer than 5, and less than 50 characters
  validates :name, presence: true, length: { in: 6...50 }
  
  # headcount > 0
  validates :headcount, numericality: { greater_than: 0 }
  # date needs to be a valid date format, should be 8 characters
end
