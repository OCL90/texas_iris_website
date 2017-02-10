Rails.application.routes.draw do

  root 'pages#index'
  get '/properties' => 'pages#properties'
  get '/investors' => 'pages#investors'
  get '/education' => 'pages#education'

end
