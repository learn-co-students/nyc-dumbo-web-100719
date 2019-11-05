Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  resources :holidays #, only: [:index, :show, :new, :create, :edit, :update, :destroy]
  # get "/holidays", to: "holidays#index"
  # get "/holidays/:id", to: "holidays#show"
  # get "/holidays/new", to: "holidays#new"
  # post "/holidays", to: "holidays#create"
  # get "/holidays/:id/edit", to: "holidays#edit"
  # patch "/holidays/:id", to: "holidays#update"
  # delete "/holidays/:id", to: "holidays#destroy"

end
