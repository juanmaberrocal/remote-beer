Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  root 'home#index'
  resources :beers
  resources :cities
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # catch angular js routing
  get '*path', to: 'home#index'
end
