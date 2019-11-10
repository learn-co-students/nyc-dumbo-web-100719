class CreateParties < ActiveRecord::Migration[6.0]
  def change
    create_table :parties do |t|
      t.string :location
      t.string :date
      t.integer :headcount
      t.belongs_to :holiday, null: false, foreign_key: true

      t.timestamps
    end
  end
end
