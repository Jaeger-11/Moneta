import { InvestIcon, TransferIcon } from "../components/Icons"

const Overview = () => {
  return (
    <div className="bg-light p-2 md:p-4 flex-1 flex flex-col">
      {/* <h3 className="text-sm font-semibold">OVERVIEW</h3> */}
      <div className="flex flex-col gap-4 flex-1">
        <main className="lg:grid lg:grid-cols-2 lg:gap-4 flex-1">
        
        <section className="flex flex-col gap-4">
          <section className="md:flex items-start gap-4">
            <div className="bg-primaryDeep card flex flex-col justify-between text-white aspect-[320/180] p-4 shadow-lg rounded-lg lg:w-1/2 max-w-xs">
              <div className="leading-none">
                <h3 className="text-xs font-medium text-gray-400 leading-tight">Card Balance</h3>
                <p className="text-xl font-semibold leading-tight">₦ 1,850,700</p>
              </div>

              <div className="">
                <h3 className="text-xs font-medium text-gray-400 leading-tight">Card Number</h3>
                <p className="text-sm font-semibold leading-tight">2345 6578 2390 8976</p>
              </div>
            </div>

            <div className="bg-white p-4 aspect-[320/180] flex flex-col justify-between shadow-lg rounded-lg lg:w-1/2">
              <div>
                <h3 className="text-sm leading-tight font-semibold">Total Balance</h3>
                <p className="text-2xl font-semibold">₦ 3,000,000</p>
              </div>

              <section className="grid grid-cols-2 gap-2 mt-4 [&_div]:p-2 [&_div]:rounded-md font-medium [&_svg]:size-5">
                <div className="bg-negative text-white cursor-pointer flex items-center gap-2 justify-center">
                  <TransferIcon/>
                  Transfer
                </div>
                <div className="bg-positive text-white cursor-pointer flex items-center gap-2 justify-center">
                  <InvestIcon/>
                  Invest
                </div>
              </section>
            </div>
          </section>

          <div className="flex-1 bg-lightGray">

          </div>
        </section>
          

        <section className="h-full border border-lightGray bg-neutral p-4">

        </section>

        </main>
        
      </div>
    </div>
  )
}

export default Overview