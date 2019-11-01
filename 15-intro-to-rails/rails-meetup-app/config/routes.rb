Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/nicky", to: "nicky#batman"

  # get "/events", to: "events#index", as: "events"
  # get "/events/:id", to: "events#show", as: "event"
  resources :events #, only: [:index, :show]
  patch "/events/:id/like", to: "events#like"

end
