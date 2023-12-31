Rails.application.routes.draw do
  root to: "pages#home"
  devise_for :users

  get '/dashboard', to: 'dashboards#dashboard', as: :dashboard
  get '/help', to: 'help#help', as: :help
  get '/buildings', to: 'buildings#index', as: :buildings
  resources :cities, except: %i[destroy]
  resources :challenges, only: %i[index show] # do
    # resources :user_game, only: %i[new create destroy]
  # end
  resources :expenses do
    collection do
      get 'json_expenses', to: 'expenses#json_expenses'
    end
  end
  resources :user_games # , only: %i[index show destroy]

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
end
