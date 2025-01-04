import LoanRequest from "../components/LoanRequest"

const ApplyLoan = () => {
  return (
    <div className="flex-1 flex flex-col p-2 lg:px-4 gap-2">
        <section className="h-28 w-full  rounded-lg bg-neutral">
            <section className="">
                
                
            </section>
        </section>

        <section className="grid grid-cols-2 gap-2 flex-1">
            <LoanRequest/>
            <section className="border">

            </section>
        </section>
    </div>
  )
}

export default ApplyLoan