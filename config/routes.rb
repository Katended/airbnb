Rails.application.routes.draw do
  devise_for :users
  
  # Corrected root path route ("/")
   root :to => 'home#index'
  
  namespace :api do
   
    get "/users_by_email/", to: "users_by_email#show", as: :users_by_email
    get "/", to: "home#index"
    
  end
end