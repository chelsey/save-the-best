# This model represents a single entry in the `favorite_locations` table
class FavoriteItem < Sequel::Model
  plugin :json_serializer
end