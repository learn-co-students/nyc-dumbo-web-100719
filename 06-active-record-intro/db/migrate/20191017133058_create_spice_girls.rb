class CreateSpiceGirls < ActiveRecord::Migration[5.2]
  def change
    create_table :spice_girls do |t|
      t.string :name
      t.string :adjective
    end
  end
end
