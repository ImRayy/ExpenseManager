export interface accountTypes {
  id: string;
  accountName: string;
  totalBalance: number;
  color: string;
  income: number;
  expense: number;
}

export interface accountDetailTypes {
  type: string;
  title: string;
  category: string;
  description: string;
  dateTime: string;
  accountName: string;
  amount: number;
}

export interface accountLogTypes {
  transactions: number;
  amount: number;
}

export interface accountTransactionTypes {
  income: accountLogTypes;
  expense: accountLogTypes;
}
