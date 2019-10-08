require 'pry'
require_relative 'models/bank_account.rb'

ginger_spice_bank_account = BankAccount.new(9_000, "Geri Halliwell")
posh_spice_bank_account = BankAccount.new(100_000, "Victoria Adams")

# ginger_spice_bank_account.balance()
ginger_spice_bank_account.balance

# posh_spice_bank_account.account_holder_name=("Victoria Beckham")
posh_spice_bank_account.account_holder_name = "Victoria Beckham"

binding.pry


$foo = "bar" #global
@foo = "bar" #instance
foo = "bar" #local



# ginger_spice_bank_account = {
#   name: "Geri Halliwell",
#   balance_usd: 9_000
# }

# posh_spice_bank_account = {
#   account_holder_name: "Victoria Adams",
#   balance_usd: 1_0_0_0_0_0
# }

# def win_the_lottery(spice_girl)
#   spice_girl[:balance_usd] += 1_000_000
#   puts "#{ spice_girl[:name] } won the lottery!"
# end

# win_the_lottery(ginger_spice_bank_account)
# win_the_lottery(posh_spice_bank_account)


