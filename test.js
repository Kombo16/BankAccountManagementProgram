import { BankAccount } from "./script.js";

const bkAcc1 = new BankAccount();
console.log(bkAcc1);


const bkAcc2 = new BankAccount();

//Depositing
bkAcc1.deposit(2300);
bkAcc1.deposit(3434);
//Withdrawing
bkAcc1.withdraw(2350);
bkAcc2.withdraw(70);

//Listing
bkAcc1.listAllDeposits()
bkAcc1.listAllWithdrawals()