class BootsController < ApplicationController #::API

  # GET BOOTS - show all boots
  def index
      @boots = Boot.all # get all the boots
      @badges = Badge.all # get all the badges
      boots = [] # empty array in prep for JSON
      # Builds the JSON object including badges
      @boots.each do |boot|
        boot_hash = {}
        boot_hash = boot.as_json
        boot_hash['badges'] = boot.badges.as_json
        boots << boot_hash
      end
      "*" * 50
      render json: boots
  end

  # SHOW BOOTS - show boot with ID 1, badges included
  def show
    # p "*" * 50
    boot = Boot.find(params[:id])
    @badges = boot.badges
    p @badges
    render json: @badges
  end

end
