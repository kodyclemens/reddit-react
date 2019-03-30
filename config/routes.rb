Rails.application.routes.draw do
  scope 'api' do
    resources :posts
  end

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
