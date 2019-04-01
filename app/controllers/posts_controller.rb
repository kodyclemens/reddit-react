class PostsController < APIController
  def index
    posts = Post.all
    render json: posts.to_json
  end

  def create
    @post = Post.new(post_params)
    @persisted = Post.find_by(post_id: @post.post_id)

    if @persisted.nil?
      @post.save
      render json: @post, status: 201
    else
      render json: @persisted, status: 409
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :post_id, :image, :permalink)
  end
end
