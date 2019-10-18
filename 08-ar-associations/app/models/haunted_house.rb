class HauntedHouse < ActiveRecord::Base

  # has_many :hauntings_of_this_house, class_name: "Haunt"
  has_many :haunts
  # def haunts
  #   Haunt.where(haunted_house_id: self.id)
  # end

  has_many :ghosts, through: :haunts

end