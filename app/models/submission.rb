# frozen_string_literal: true

class Submission < ApplicationRecord
  belongs_to :user
  has_one_attached :media
end
