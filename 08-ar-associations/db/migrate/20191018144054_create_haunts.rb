class CreateHaunts < ActiveRecord::Migration[5.2]
  def change
    create_table :haunts do |t|
      t.integer :ghost_id
      t.integer :haunted_house_id
      t.timestamps
    end
  end
end
