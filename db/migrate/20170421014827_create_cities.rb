class CreateCities < ActiveRecord::Migration[5.0]
  def change
    create_table :cities do |t|
      t.string :city_name
      t.string :country_name

      t.timestamps
    end
  end
end
