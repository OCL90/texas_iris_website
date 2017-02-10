class PagesController < ApplicationController
  def index

  end

  def properties

  end
  def create
    client = Client.new(name: params[:name], email: params[:email], phone: params[:phone_number], home_address: params[:address_house_selling], comment: params[:comment])
    if client.save
      ClientMailer.new_client(client).deliver_now
      flash[:success] = "Thanks for getting in touch with me. I will get back to you soon!"
      redirect_to :root
    else
      flash[:errors] = client.errors.full_messages
      redirect_to :back
    end
  end
  def investors
  end

  def education
  end

end
