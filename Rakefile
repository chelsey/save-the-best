require 'sequel'

def establish_connection
  Sequel.connect(ENV['DATABASE_URL'] || 'postgres://localhost/da_best')
end

namespace :db do
  namespace :migrate do
    Sequel.extension :migration

    connection = establish_connection

    task :down do
      Sequel::Migrator.apply(connection, 'db/migrate')
    end

    task :up do
      Sequel::Migrator.apply(connection, 'db/migrate')
    end
  end

  namespace :data do
    establish_connection

    # Needs to wait until after we set up the database
    require_relative 'lib/models/favorite_item'

    task :seed do
      FavoriteItem.create(:name => 'French Toast', :location_name => "Grandma's Maui Coffee", :address => "9232 Kula Hwy, Kula, HI")
      FavoriteItem.create(:name => 'Shrimp', :location_name => "Star Noodle", :address => "286 Kupuohi St, Maui, HI")
    end

    task :clear do
      [FavoriteItem].map(&:delete)
    end
  end
end
