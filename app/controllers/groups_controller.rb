class GroupsController < ApplicationController
  before_action :find_params, only: [:edit, :update]

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(create_params)
    if @group.save
      redirect_to root_path, notice: 'チャットグループが作成されました。'
    else
      flash.alert = 'チャットグループが作成できませんでした。'
      render :new
    end
  end

  def edit
  end

  def update
    if @group.update(update_params)
      redirect_to root_path, notice: 'チャットグループが更新されました。'
    else
      flash.alert = 'チャットグループが更新できませんでした。'
      render :edit
    end
  end

  private
  def create_params
    params.require(:group).permit(:name)
  end

  def update_params
    params.require(:group).permit(:name)
  end

  def find_params
    @group = Group.find(params[:id])
  end
end
