class Client < ActiveRecord::Base
  validates :name, :email, :phone, :home_address, :comment, presence: true
end
