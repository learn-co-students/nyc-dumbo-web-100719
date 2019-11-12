class User < ApplicationRecord
  has_secure_password
  
  # def password=(plaintext_password)
  #   # run through BCRYPT
  #   encrypted_password = BCrypt::Password.create(plaintext_password)
  #   # save to the password_digest field
  #   self.password_digest = encrypted_password
  # end

  # def authenticate(plaintext_password)
  #   encrypted_password = BCrypt::Password.new(self.password_digest)
  #   encrypted_password == plaintext_password
  # end

end
