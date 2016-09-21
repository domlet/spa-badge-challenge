class BootsController < ApplicationController #::API

  # GET BOOTS - show all boots
  def index
      @boots = Boot.all
      @badges = Badge.all
      boots = []
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
    p "show"
    boot = Boot.find(params[:id])
    @badges = boot.badges
    # p "*" * 50
    p @badges
    render json: @badges
  end

end
