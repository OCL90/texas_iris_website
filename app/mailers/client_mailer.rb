class ClientMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.client_mailer.new_client.subject
  #
  def new_client(client)
    @client = client

    mail to: "oscarcortazar90@gmail.com", subject: "Potential client from www.texasiris.net"
  end
end
