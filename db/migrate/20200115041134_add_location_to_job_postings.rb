class AddLocationToJobPostings < ActiveRecord::Migration[5.1]
  def change
    add_column :job_postings, :location, :string
  end
end
