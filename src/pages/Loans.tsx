import { Link } from "react-router-dom";
import LoansComponent from "../components/Loans";

const Loans = () => {
  return (
    <div className="p-2 lg:p-4 flex-1 flex flex-col gap-2">
      <section className="h-max w-full p-3 bg-neutral rounded-lg overflow-hidden flex justify-between items-center">
        <section className=" text-sm">
          <div>
            <h3 className="text-black font-semibold text-base">Turn Your Dreams Into Reality!</h3>
            <p>From vacations to home renovations, fund your goals with our easy personal loan plans. <b>Low Interest rate</b> <br/> Apply now in just a few clicks.</p>
            
          </div>
        </section>
        <section className="flex justify-center items-center">
            <Link to={'/loans/apply'}>
              <button className="bg-primaryDeep text-white text-base p-2 px-4 rounded-sm hover:scale-105 transition-all">Get Loan</button>
            </Link>
        </section>
      </section>

      <section className="flex-1 grid grid-cols-2 gap-2">
        <section>
          <div className="grid grid-cols-2 gap-2 ">
            <div className="bg-blue-100 border border-blue-300 rounded-md p-2">
              <h3 className="text-base font-semibold">Active Loan</h3>
              <p>Amount: <span className="font-bold">₦500,000</span></p>
              <p>Tenure: <span className="font-bold">12 months</span></p>
              <p>Interest Rate: <span className="font-bold">10%</span></p>
              <p>Repayment Date: <span className="font-bold">20 Nov 2025</span></p>
            </div>
            <div className="bg-yellow-400 border flex flex-col gap-2 border-blue-300 rounded-md p-2">
              <div>
                <h3 className="text-sm font-semibold leading-none text-gray-400">Total Loan Balance</h3>
                <p><span className="font-bold leading-none text-white">₦1,500,000</span></p>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-none text-gray-400">Amount Paid</h3>
                <p> <span className="font-bold leading-none text-white">₦1,000,000</span></p>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-none text-gray-400">Outstanding Balance</h3>
                <p> <span className="font-bold leading-none text-white">₦500,000</span></p>
              </div>
            </div>
          </div>

          
        </section>
        

        <div className="overflow-x-auto text-sm border p-2">
          <h3 className="text-base font-semibold mb-2 text-gray-500">Your Loans</h3>
          <div className="overflow-y-scroll h-[60svh] pr-1"><LoansComponent /></div>
        </div>
      </section>
    </div>
  )
}

export default Loans