class UsersController < ApplicationController
  def edit
    @user = User.find(params[:id])
  end

  def update
    user = User.find(params[:id])
    if user.update(update_params)

    else
      render 'edit'
    end
  end

  private
  def update_params
    params.require(:user).permit(:name, :email, :password, :password_confirmation)
  end
end