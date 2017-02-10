# Preview all emails at http://localhost:3000/rails/mailers/client_mailer
class ClientMailerPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/client_mailer/new_client
  def new_client
    client = Client.last
    ClientMailer.new_client(client)
  end

end
