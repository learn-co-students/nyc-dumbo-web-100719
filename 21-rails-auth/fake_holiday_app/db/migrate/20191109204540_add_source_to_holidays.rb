class AddSourceToHolidays < ActiveRecord::Migration[6.0]
  def change
    add_column :holidays, :source, :string
  end
end
