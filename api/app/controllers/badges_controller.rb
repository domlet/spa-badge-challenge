class BadgesController < ApplicationController
  # GET BADGES - create new badge, expects parameters
  def create
    @badge = Badge.new(badge_name: params[:badge_name], vote_count: params[:vote_count], boot_id: params[:boot_id])
    if @badge.save
      render json: @badge
    else
      render json: @badge.errors
    end
  end

  # SHOW BADGES - vote for a badge
  # Expects one param called "vote_type" whose value can be "up" or "down"
  def update
    p params
    p "*" * 50
    p @badge = Badge.find(params[:id])
    p @badge.update_attributes(vote_count: params[:vote_count])
    render json: @badge
  end

end
