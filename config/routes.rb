Rails.application.routes.draw do
  get 'api/posts/most-votes', to: 'posts#votes'
  get 'api/posts/most-cheers', to: 'posts#cheers'
  get 'api/posts/recently-voted', to: 'posts#index'

  scope 'api' do
    resources :posts
  end


  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
