Sequel.migration do
  up do
    create_table :favorite_items do
      primary_key :id

      Date    :visited_date
      Float   :latitude
      Float   :longitude
      String  :name
      String  :location_name
      String  :address
    end
  end

  down do
    drop_table :favorite_items
  end

end