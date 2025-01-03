import { InvestIcon, TransferIcon } from "../components/Icons"

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
                    <section className="flex flex-col gap-2 ">
                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <TransferIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer To Moniepoint
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-negative">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer From AGB Limited
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-positive">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer To Investments
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-negative">₦ 7,450</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer From AGB Limited
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-positive">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer From AGB Limited
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-positive">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer To AB plc
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2022</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-negative">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer From AGB Limited
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-positive">₦ 5,850</p>
                        </div>

                        <div className="border-b w-full p-1.5 rounded-sm grid grid-cols-3 items-center hover:bg-lightGray cursor-pointer">
                            <div className="col-span-2 flex gap-2 items-center ">
                                <div className="size-7 rounded-full bg-primaryLight [&_svg]:size-4 flex justify-center items-center">
                                    <InvestIcon/>
                                </div>
                                <p className="text-sm font-medium flex flex-col leading-tight">
                                    Transfer From AGB Limited
                                    <span className="text-gray-400 text-xs font-semibold leading-tight">20 Nov 2021</span>
                                </p>
                            </div>
                            <p className="text-right font-semibold text-positive">₦ 5,850</p>
                        </div>
                    </section>
                </section>
                </div>
                
                
                <section className="border border-neutral bg-white p-2 flex-1">
                    <h3 className="font-semibold text-lg">Transaction Details</h3>
                    <section>
                        
                    </section>
                </section>
            </main>
        </section>
    </div>
  )
}

export default Transaction