Rails.application.routes.draw do
get '/api/posts', to: 'posts#index'

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
