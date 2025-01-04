import React from 'react'

const LoanRequest = () => {
  return (
    <div className="p-4 bg-gray-50 border rounded-md my-4">
    <h3 className="text-md font-semibold">Request a New Loan</h3>

    <form className="flex flex-col gap-4 mt-4">
        {/* Loan Amount */}
        <div>
        <label htmlFor="amount" className="block text-sm font-medium">Loan Amount (₦)</label>
        <input type="number" id="amount" className="w-full border rounded p-2" placeholder="Enter amount" required />
        </div>

        {/* Tenure */}
        <div>
        <label htmlFor="tenure" className="block text-sm font-medium">Tenure (months)</label>
        <select id="tenure" className="w-full border rounded p-2" required>
            <option value="">Select tenure</option>
            <option value="6">6 months</option>
            <option value="12">12 months</option>
            <option value="24">24 months</option>
        </select>
        </div>

        {/* Purpose */}
        <div>
        <label htmlFor="purpose" className="block text-sm font-medium">Purpose</label>
        <textarea id="purpose" className="w-full border rounded p-2" placeholder="Enter purpose" required></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit Request
        </button>
    </form>
    </div>
  )
}

export default LoanRequest