# frozen_string_literal: true

Rails.application.routes.draw do
  get 'api/posts/most-votes', to: 'posts#votes'
  get 'api/posts/most-cheers', to: 'posts#cheers'
  get 'api/posts/recently-pinned', to: 'posts#index'

  scope 'api' do
    resources :posts
  end

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
    !request.xhr? && request.format.html?
  }
end
