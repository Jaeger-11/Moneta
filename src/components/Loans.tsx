import { LoanType } from "../interface"

const data = [
    {
        id: '8973',
        name: 'Loan 1',
        amount: 139000,
        interest: 10,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '8927',
        name: 'Car Loan',
        amount: 254000,
        interest: 20,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '1897',
        name: 'House Loan',
        amount: 300000,
        interest: 30,
        tenure: '16 months',
        status: 'Unpaid',
        date: '20 Nov 2023'
    },
    {
        id: '8097',
        name: 'Loan 1',
        amount: 139000,
        interest: 10,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '8897',
        name: 'Car Loan',
        amount: 254000,
        interest: 20,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '2397',
        name: 'House Loan',
        amount: 300000,
        interest: 30,
        tenure: '16 months',
        status: 'Unpaid',
        date: '20 Nov 2023'
    },
    {
        id: '9097',
        name: 'Loan 1',
        amount: 139000,
        interest: 10,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '8907',
        name: 'Car Loan',
        amount: 254000,
        interest: 20,
        tenure: '12 months',
        status: 'Paid',
        date: '20 Nov 2023'
    },
    {
        id: '2317',
        name: 'House Loan',
        amount: 300000,
        interest: 30,
        tenure: '16 months',
        status: 'Unpaid',
        date: '20 Nov 2023'
    }
]
const Loans = () => {
  return (
    <table className="w-full border-collapse border border-gray-300 
    [&_th]:border [&_th]:border-gray-300 [&_th]:p-2
    [&_td]:border [&_td]:border-gray-300 [&_td]:p-2 [&_td]:text-center
    ">
        <thead className="bg-gray-100">
        <tr>
            <th className="">Loan ID</th>
            <th className="">Amount</th>
            <th className="">Tenure</th>
            <th className="">Interest</th>
            <th className="">Status</th>
            <th className="">Date</th>
        </tr>
        </thead>
        <tbody >
            {data.map((item:LoanType) => {
                return (
                    <tr key={item.id}>
                        <td className=" italic">#{item.id}</td>
                        <td className=" font-semibold">₦{item.amount}</td>
                        <td className="">{item.tenure}</td>
                        <td className="">{item.interest}%</td>
                        <td className={` font-semibold ${item.status.toLowerCase() === 'paid' ? 'text-positive' : 'text-negative'}`}>{item.status}</td>
                        <td className="">{item.date}</td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  )
}

export default Loans