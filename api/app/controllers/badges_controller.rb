class BadgesController < ApplicationController
  # GET BADGES - create new badge, expects phrase and teacher_id as parameters
  def create
    @badge = Badge.new(phrase: params[:phrase], boot_id: params[:boot_id])
    if @badge.save
      render json: @badge
    else
      render json: @badge.errors
    end
  end

  # SHOW BADGES - vote for a badge
  # Expects one param called "vote_type" whose value can be "up" or "down"
  def update
    @badge = Badge.find(params[:id])
    @badge.update(phrase: params[:phrase], boot_id: params[:boot_id])
    render json: @badge
  end

end
