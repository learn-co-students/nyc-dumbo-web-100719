class CreateHolidays < ActiveRecord::Migration[6.0]
  def change
    create_table :holidays do |t|
      t.string :name
      t.string :date
      t.string :description
      t.boolean :gifts_needed, default: true

      t.timestamps
    end
  end
end
