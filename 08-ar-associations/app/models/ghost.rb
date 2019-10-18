class Ghost < ActiveRecord::Base

  has_many :haunts
  # def haunts
  #   Haunt.where(ghost_id: self.id)
  # end

  has_many :haunted_houses, through: :haunts
  # has_many :haunted_houses, :through => :haunts
  # def haunted_houses
  #   self.haunts.map do |haunt|
  #     haunt.haunted_house
  #   end
  # end

end


# { key: "value" }
# { :key => "value" }