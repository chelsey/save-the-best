configure :development do
 set :database, 'sqlite:///dev.db'
 set :show_exceptions, true
end

configure :production do
 db = URI.parse(ENV['DATABASE_URL'] || 'postgres:///localhost/dabest')

 ActiveRecord::Base.establish_connection(
   :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
   :host     => db.host,
   :username => db.user,
   :password => db.password,
   :database => db.path[1..-1],
   :encoding => 'utf8'
 )
end


# require 'sequel/extensions/migration'

# module Configuration
#   class << self
#     attr_accessor :settings
#     attr_reader :db

#     def setup!
#       return if @setup

#       if url = database_url
#         @db = Sequel.connect(url)
#       elsif settings.environment == :test || :development
#         @db = Sequel.connect('sqlite:/')
#       else
#         fail "no database configured for env: #{settings.environment}"
#       end

#       migrate!

#       # Needs to wait until after we set up the database
#       require_relative './models/favorite_item'
#     end

#   private

#     def migrate!
#       Sequel::Migrator.apply(db, 'db/migrate')
#     end

#     def database_url
#       ENV['DATABASE_URL']
#     end
#   end
# end