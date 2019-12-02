class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :subject, :professor_name
  # has_many :assignments
  has_many :classrooms
end
