Rails.application.routes.draw do
  resources :boxes
  resources :toys

  patch "/toys/:id/likes", to: "toys#likes"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
