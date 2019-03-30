class PostsController < APIController
  def index
    posts = Post.all
    render json: posts.to_json
  end

  def create
    @post = Post.create!(post_params)
    render json: @post, status: 201
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :post_id, :image, :post_permalink)
  end
end
