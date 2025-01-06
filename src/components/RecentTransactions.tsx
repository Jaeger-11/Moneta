import { TransactionType } from "../interface";
import { TransferIcon, InvestIcon } from "./Icons"
import { currencyFormat } from "../utils";
import { useSelector } from "react-redux";

const RecentTransactions = () => {
    const { transactions } = useSelector((state:any) => state.transaction);

    return (
    <div className="p-2 lg:p-4">
        <h3 className="font-semibold px-2 mb-2">Recent Transactions</h3>

         <section className="flex flex-col gap-2 ">
            {
                transactions.slice(0,5).map((transaction:TransactionType, index:number) => {
                    const { date, description, type, amount} = transaction
                    return (
                        <div key={index} className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    { type.toLowerCase() === 'debit' ? <TransferIcon/> : <InvestIcon/>}
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    {description}
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">{date.slice(0,10)}</span>
                                </p>
                            </div>
                            <p className={`text-right amount font-semibold ${type.toLowerCase() === 'debit' ? 'text-negative' : 'text-positive'}`}>₦ {currencyFormat(amount)}</p>
                        </div>
                    )
                })
            }
        </section>
    </div>
  )
}

export default RecentTransactions