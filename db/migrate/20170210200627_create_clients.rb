class CreateClients < ActiveRecord::Migration
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.integer :phone
      t.string :home_address
      t.string :comment

      t.timestamps null: false
    end
  end
end
