Rails.application.routes.draw do
  devise_for :users
  
  # Corrected root path route ("/")
   root :to => 'home#index'
  
  namespace :api do
    resources :users, only: [:show]
  end
end
