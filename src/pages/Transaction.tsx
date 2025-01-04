import { InvestIcon, TransferIcon } from "../components/Icons"
import Transactions from "../components/Transactions"

const Transaction = () => {
  return (
    <div className="p-2 lg:p-4 text-base flex-1 flex flex-col gap-6">
        <section className="flex flex-wrap gap-3">
            <div className="p-2 px-4 rounded-sm shadow-md bg-neutral min-w-48">
                <span className="text-gray-400 text-sm">Total Balance</span>
                <p className="text-xl font-semibold mt-2">₦ 1,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-white min-w-48">
                <span className="text-gray-400 text-sm">Inflow</span>
                <p className="text-xl font-semibold mt-2 text-positive">₦ 3,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-white min-w-48">
                <span className="text-gray-400 text-sm">Outflow</span>
                <p className="text-xl font-semibold mt-2 text-negative">₦ 5,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-lightGray min-w-48">
                <span className="text-gray-400 text-sm">Transactions</span>
                <p className="text-xl font-semibold mt-2">700</p>
            </div>
        </section>

        <section className="flex-1 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Transactions</h2>
            <main className="flex-1 flex gap-2">
                <div className="overflow-y-scroll flex-1">
                <section className="border-x border-t border-neutral max-h-[65svh] p-2 mr-1">
                    <Transactions/>
                </section>
                </div>
                
                
                <section className="border border-neutral overflow-y-scroll bg-white p-2 lg:p-4 flex-1">
                    <h3 className="font-semibold text-lg">Transaction Details</h3>
                    <section className="flex flex-col gap-2 h-[50svh]">
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Amount</h4>
                            <div className="text-lg font-semibold">₦ 5,850</div>
                        </div>
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Sender Details</h4>
                            <div className="text-sm font-medium leading-tight"> AGB Limited | Moniepoint - 70689****90 </div>
                        </div>
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Transaction Type</h4>
                            <div className="text-sm font-medium"> Transfer To Account </div>
                        </div>
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Transaction Number</h4>
                            <div className="text-sm font-medium"> 234589092383402 </div>
                        </div>
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Transaction Date</h4>
                            <div className="text-sm font-medium"> Nov 21st, 2021 23:34:12 </div>
                        </div>
                        <div className="border-b pb-1">
                            <h4 className="text-sm text-primaryLight font-medium">Remark</h4>
                            <div className="text-sm font-medium"> Furniture Deposit </div>
                        </div>
                    </section>
                </section>
            </main>
        </section>
    </div>
  )
}

export default Transaction