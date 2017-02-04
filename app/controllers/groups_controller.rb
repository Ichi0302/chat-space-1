class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :edit, :update]

  def index
    @groups = Group.all
  end

  def show
    @groups = Group.all
  end

  def new
    @group = Group.new
  end

  def create
    @group = Group.new(group_params)
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
    if @group.update(group_params)
      redirect_to root_path, notice: 'チャットグループが更新されました。'
    else
      flash.alert = 'チャットグループが更新できませんでした。'
      render :edit
    end
  end

  private

  def group_params
    params.require(:group).permit(:name)
  end

  def set_group
    @group = Group.find(params[:id])
  end

end
