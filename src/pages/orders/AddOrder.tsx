
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const AddOrder = () => {
  return (
    <div className="p-6 w-full max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Add Order</h1>
          <p className="text-gray-500">Let's check your store today</p>
        </div>
        <div className="space-x-4">
          <button className="px-6 py-2 border border-gray-200 rounded-lg hover:bg-gray-50">
            Discard
          </button>
          <button className="px-6 py-2 bg-jadeite text-white rounded-lg hover:opacity-90">
            Save
          </button>
        </div>
      </div>

      <div className="flex gap-8">
        <div className="flex-1 space-y-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">First name</label>
                <Input placeholder="Marci" />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">Last name</label>
                <Input placeholder="Center" />
              </div>
            </div>
            
            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <Input type="email" placeholder="marcicenter@mail.com" />
            </div>

            <div className="mt-4">
              <label className="block text-sm text-gray-600 mb-1">Phone Number</label>
              <div className="flex gap-2">
                <Select className="w-[100px]">
                  <option value="us">🇺🇸 +1</option>
                </Select>
                <Input placeholder="(201) 555-0124" />
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Address</h2>
            <Select className="w-full mb-4">
              <option>United States</option>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="marketing-emails" />
              <label htmlFor="marketing-emails" className="text-sm text-gray-600">
                Customer agreed to receive marketing emails.
              </label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="marketing-sms" />
              <label htmlFor="marketing-sms" className="text-sm text-gray-600">
                Customer agreed to receive SMS marketing text messages.
              </label>
            </div>
            <p className="text-xs text-gray-400 italic">
              You should ask your customers for permission before you subscribe them to your marketing emails or SMS.
            </p>
          </div>
        </div>

        <div className="w-72">
          <div>
            <h2 className="text-lg font-semibold mb-4">Customer Image</h2>
            <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
              <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                </svg>
              </div>
              <button className="bg-jadeite text-white px-4 py-2 rounded-lg w-full hover:opacity-90">
                Upload Image
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold mb-4">Notes</h2>
            <textarea 
              className="w-full h-32 p-3 border border-gray-200 rounded-lg resize-none"
              placeholder="Add note about your customer."
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddOrder;
