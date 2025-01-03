
const Transaction = () => {
  return (
    <div className="p-2 lg:p-4 text-base flex-1 flex flex-col gap-6">
        <section className="flex flex-wrap gap-3">
            <div className="p-2 px-4 rounded-sm shadow-md bg-neutral min-w-48">
                <span className="text-gray-400 text-sm">Total Balance</span>
                <p className="text-xl font-semibold mt-2">₦ 1,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-white min-w-48">
                <span className="text-gray-400 text-sm">Income</span>
                <p className="text-xl font-semibold mt-2 text-positive">₦ 3,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-white min-w-48">
                <span className="text-gray-400 text-sm">Outcome</span>
                <p className="text-xl font-semibold mt-2 text-negative">₦ 5,850,700</p>
            </div>
            <div className="p-2 px-4 rounded-sm shadow-md bg-lightGray min-w-48">
                <span className="text-gray-400 text-sm">Transactions</span>
                <p className="text-xl font-semibold mt-2">700</p>
            </div>
        </section>

        <section className="flex-1 flex flex-col gap-2">
            <h2 className="text-lg font-semibold">Transactions</h2>
            <main className="flex-1 grid grid-cols-2 gap-2">
                <section className="border border-neutral bg-lightGray">

                </section>
                
                <section className="border border-neutral bg-white">

                </section>
            </main>
        </section>
    </div>
  )
}

export default Transaction