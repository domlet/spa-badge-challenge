class CreateBadges < ActiveRecord::Migration
  def change
    create_table :badges do |t|
      t.string :badge_name
      t.integer :vote_count
      t.integer :boot_id

      t.timestamps null: false
    end
  end
end
