class UsersController < ApplicationController
  def edit
  end

  def update
    current_user.update(update_action)
  end

  private
  def update_action
    params.require(:user).permit(:name, :email, :encrypted_password)
  end
end
