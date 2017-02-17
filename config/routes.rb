Rails.application.routes.draw do
  devise_for :users
  resources :users, only: %i(edit update) do
    collection do
      get 'search'
    end
  end
  resources :groups, except: %i(show destroy) do
    resources :messages, only: %i(index create)
  end
  root 'groups#index'
end
