class UserGameController < ApplicationController
  before_action :set_user_game, only: %i[show destroy]
  before_action :set_challenge, only: %i[create]

  def index
    @user_games = UserGame.all
    @challenges = Challenge.all
  end

  def new
    @user_game = UserGame.new
    @challenge = Challenge.new
  end

  def create
    @user_game.challenge_id = @challenge.id
    @user_game.user_id = current_user.id
    @user_game = UserGame.new(user_game_params)
    @user_game.save!
    redirect_to user_game_path(@user_game)
  end

  def show; end

  def destroy
    @user_game.destroy
    redirect_to user_game_path
  end

  private

  def user_game_params
    params.require(:user_game).permit(:user_id, :challenge_id)
  end

  def set_challenge
    @challenge = Challenge.find(params[:challenge_id])
  end

  def set_user_game
    @user_game = UserGame.find(params[:id])
  end
end