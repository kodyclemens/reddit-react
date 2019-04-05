# frozen_string_literal: true

class PostsController < APIController
  def index
    # Returning the default order with the most recently voted on posts
    # With a good amount of users the front page will feel more dynamic

    posts = Post.all.order(created_at: :desc)
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
    cheer_value = post_params[:cheer_value]
    @post = Post.find(params[:id])
    @post.total_votes += 1
    @post.cheers += cheer_value
    @post.save
  end

  def show
    @post = Post.find(params[:id])
    render json: @post, status: 200
  end

  def votes
    posts = Post.all.order(total_votes: :desc)
    render json: posts.to_json
  end

  def cheers
    posts = Post.all.order(cheers: :desc)
    render json: posts.to_json
  end

  private

  def post_params
    params.require(:post).permit(:title, :author, :post_id, :image, :permalink, :id, :cheer_value)
  end
end
