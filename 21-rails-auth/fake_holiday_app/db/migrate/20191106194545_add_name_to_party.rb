class AddNameToParty < ActiveRecord::Migration[6.0]
  def change
    add_column :parties, :name, :string
  end
end
