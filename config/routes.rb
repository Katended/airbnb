Rails.application.routes.draw do
  devise_for :users
  
  # Corrected root path route ("/")
   root :to => 'home#index'
  
  namespace :api do
    resources :users, only: [:show]
    get "/users_by_email/", to: "users_by_email#show", as: :users_by_email
  end
end