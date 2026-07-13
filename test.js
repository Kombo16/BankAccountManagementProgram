import { BankAccount } from "./script.js";

const bkAcc1 = new BankAccount();
console.log(bkAcc1);

const bkAcc2 = new BankAccount();
console.log(bkAcc2)

//Depositing
console.log(bkAcc1.deposit(2300));
console.log(bkAcc1.deposit(3434));
//Withdrawing
console.log(bkAcc1.withdraw(2350));
console.log(bkAcc2.withdraw(70));

//Listing
console.log(bkAcc1.listAllDeposits())
console.log(bkAcc1.listAllWithdrawals())