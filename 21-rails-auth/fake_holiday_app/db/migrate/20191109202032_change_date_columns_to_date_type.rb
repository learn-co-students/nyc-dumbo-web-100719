class ChangeDateColumnsToDateType < ActiveRecord::Migration[6.0]
  def change
    change_column :parties, :date, :datetime
  end
end
