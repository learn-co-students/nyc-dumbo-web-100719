class BankAccount

  attr_reader :balance  # a getter
  attr_accessor :account_holder_name # getter and a setter

  def initialize(balance, account_holder_name)
    @interest_rate = 1.00001
    @balance = balance
    @account_holder_name = account_holder_name
  end

  def deposit(amount_to_deposit)
    binding.pry
    # balance += amount_to_deposit
    self.balance += amount_to_deposit
    # @balance += amount_to_deposit
  end

  def withdraw(amount_to_withdraw)
    @balance -= amount_to_withdraw
    if self.balance < 0
      overdraft_fee
    end
  end

  private # everything below private is private

  def overdraft_fee
    @balance -= 30 
  end

  # # getter method
  # def account_holder_name
  #   @account_holder_name
  # end

  #setter 
  # def account_holder_name=(new_name)
  #   @account_holder_name = new_name
  # end

  # def balance
  #   @balance
  # end

  # def print_self
  #   p self
  # end

  # def do_monthly_tasks
  #   binding.pry
  #   self.accrue_interest
  #   accrue_interest
  # end

  # private

  # def accrue_interest
  #   @balance = @balance * @interest_rate
  # end


end


