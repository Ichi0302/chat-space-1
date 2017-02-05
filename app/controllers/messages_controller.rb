class MessagesController < ApplicationController

  def index
    @groups = current_user.groups
    @group = Group.find(params[:group_id])
    @messages = @group.messages
    @message = Message.new
  end

  def create
    @message = Message.new(create_params)
    if @message.save
      redirect_to group_messages_path
    else
      flash.alert = 'メッセージを入力してください。'
    end
  end

  private

  def create_params
    params.require(:message).permit(:text).merge(group_id: params[:group_id], user_id: current_user.id)
  end

end
