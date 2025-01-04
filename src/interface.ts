export interface LoanType {
    id: string;
    name: string;
    amount: number;
    interest: number;
    tenure:  string;
    status: string;
    date: string;
}

interface Details {
    name: string;
    account: string;
}

export interface TransactionType {
    id: string;
    date: string
    description: string;
    amount: number;
    type: string;
    category: string;
    status: string;
    details: Details;
    transactionType: string;
    transactionNumber: string;
    remark: string;
  }