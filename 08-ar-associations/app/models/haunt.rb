class Haunt < ActiveRecord::Base

  belongs_to :ghost
  # def ghost
  #   Ghost.find(self.ghost_id)
  # end

  belongs_to :haunted_house
  # def haunted_house
  #   HauntedHouse.find(self.haunted_house_id)
  # end

end