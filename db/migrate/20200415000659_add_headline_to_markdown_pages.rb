# frozen_string_literal: true

class AddHeadlineToMarkdownPages < ActiveRecord::Migration[5.1]
  def change
    add_column :markdown_pages, :headline, :string
  end
end
