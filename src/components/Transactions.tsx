import { TransferIcon, InvestIcon } from "./Icons"
import { useState, useEffect } from "react";
import axios from "axios";
import { TransactionType } from "../interface";
import { currencyFormat } from "../utils";

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('/data.json')
        .then(res => setTransactions(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <section className="flex flex-col gap-2 ">
        {
            transactions.map((transaction:TransactionType, index) => {
                const { date, description, type, amount } = transaction
                return (
                    <div key={index} className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                        <div className="col-span-2 flex gap-2 items-center ">
                            <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                { type.toLowerCase() === 'debit' ? <TransferIcon/> : <InvestIcon/>}
                            </div>
                            <p className="text-sm font-medium flex flex-col leading-tight">
                                {description}
                                <span className="text-gray-400 text-xs font-semibold leading-tight">{date}</span>
                            </p>
                        </div>
                        <p className={`text-right font-semibold ${type.toLowerCase() === 'debit' ? 'text-negative' : 'text-positive'}`}>₦ {currencyFormat(amount)}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default Transactions