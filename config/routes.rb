Rails.application.routes.draw do
  root to: 'application#home'
  resources :items
  resources :lists
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

end
