class CreateItems < ActiveRecord::Migration
 def self.up
   create_table :items do |t|
     t.date     :visited_date
     t.integer  :latitude
     t.integer  :longitude
     t.string   :item_name
     t.string   :location_name
     t.string   :address
     t.timestamps
   end
 end

 def self.down
   drop_table :items
 end
end

# Sequel.migration do
#   up do
#     create_table :favorite_items do
#       primary_key :id

#       Date    :visited_date
#       Float   :latitude
#       Float   :longitude
#       String  :name
#       String  :location_name
#       String  :address
#     end
#   end

#   down do
#     drop_table :favorite_items
#   end
# end