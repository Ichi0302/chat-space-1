Rails.application.routes.draw do
  devise_for :users, except: [:edit]
  resources :users, only: [:edit, :update]
  root 'messages#index'
  resources :messages, only: [:index]
end
