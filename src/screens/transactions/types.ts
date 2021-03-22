export interface ITransactionsScreen {}

export interface ITransactionItem  {
    item: {
        id: string;
        title: string;
        note: string;
        price: string;
        status: string;
    },
}
