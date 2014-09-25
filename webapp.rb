require 'json'
require 'sequel'
require 'sinatra/base'

class WebApp < Sinatra::Base
  get '/' do
    send_file 'public/index.html'
  end

  # @return [Array] Array of all items
  get '/api/items' do

  end

  # @return The item with the id of [:id]
  get '/api/items/:id' do
  end

  # Add a new item
  # @return the item with an [:id] attribute added
  post '/api/items' do
  end

  # Update the bok with the id of [:id]
  put '/api/items/:id' do
  end

  # Delete the item with the id of [:id]
  delete '/api/items/:id' do
  end
end