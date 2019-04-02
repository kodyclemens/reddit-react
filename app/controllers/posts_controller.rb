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

  def update
    puts "Cheer value: #{post_params[:cheer_value]}"
    @post = Post.find(params[:id])
    @post.cheers += post_params[:cheer_value]
    @post.save
    puts "New cheer value: #{@post.cheers}"
  end

  def show
    @post = Post.find(params[:id])
    render json: @post, status: 200
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :post_id, :image, :permalink, :id, :cheer_value)
  end
end
