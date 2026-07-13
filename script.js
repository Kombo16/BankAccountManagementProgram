class BankAccount{
    static noOfAccounts = 0;
    constructor() {
        this.balance = 0;
        this.transactions = [];
        noOfAccounts++;
    }
    //deposit
    deposit(amount) {
        if (amount > 0) {
            addTransaction("deposit",amount);
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`
        }
        else return "Deposit amount must be greater than zero."
    }
    //withdraw
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            addTransaction("withdraw",amount);
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`
        }
        else return "Insufficient balance or invalid amount."
    }
    //transactions
    addTransactions(type, amount) {
        return this.transactions.push({type: type, amount: amount})
    }
    //Checking balance
    checkBalance() {
        return `Current balance: ${this.balance}`
    }
    //Listing deposits/withdrawals
    listAllDeposits(name="deposit"){
        const deposits = this.transactions.filter(transaction=>transaction.type===name).map(deposit=>{
            return deposit.amount;
        }).toString();
        return `Deposits: ${deposits}`
    }
    listAllWithdrawals(name="withdraw"){
         const withdrawals = this.transactions.filter(transaction=>transaction.type===name).map(withdrawal=>{
            return withdrawal.amount;
        }).toString();
        return `Withdrawals: ${withdrawals}`
    }
}
