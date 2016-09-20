class BootsController < ApplicationController #::API

  # GET BOOTS - show all boots
  def index
      p @boots = Boot.all
      render json: @boots
  end

  # SHOW BOOTS - show boot with ID 1, badges included
  def show
    p "show"
    boot = Boot.find(params[:id])
    @badges = boot.badges
    p @badges
    render json: @badges
  end

end


# GET /teachers -->
# GET /teachers/1 -->
# POST /badges -->
# PUT /badges/:id -->
