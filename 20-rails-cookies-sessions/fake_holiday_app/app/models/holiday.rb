class Holiday < ApplicationRecord
  has_many :parties, dependent: :destroy

  def random_gif
    adapter = Giphy::Adapter.new
    response = adapter.search("#{source} #{name}")
    return "" unless response && response["data"].length > 0
    random_gif = response["data"].sample
    random_gif["images"]["fixed_height"]["url"]
  end

  def name_with_description
    "#{self.name} #{self.description}"
  end

end
