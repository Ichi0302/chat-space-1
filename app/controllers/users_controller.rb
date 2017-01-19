class UsersController < ApplicationController
  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if user.update(update_params)
      render 'messages/index'
    else
      redirect_to controller: :users, action: :edit
    end
  end

  private
  def update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation, :current_password)
  end
end