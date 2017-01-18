Rails.application.routes.draw do
  devise_for :users
  resources :users, only: [:edit, :update]
  root 'messages#index'
  resources :messages, only: [:index]
end
