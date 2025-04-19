
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";

const General = () => {
  return (
    <div className="p-6 w-full">
      <h1 className="text-2xl font-semibold mb-2">Store Details</h1>
      <p className="text-gray-500 mb-6">Salesline and your customers will use this information to contact you.</p>
      
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Store name</label>
          <Input placeholder="Makostore" />
        </div>
        
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Industry</label>
          <Select>
            <option>Clothing</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Store currency</label>
          <Select>
            <option>US Dollars (USD)</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Timezone</label>
          <Select>
            <option>US & Canada</option>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-gray-600">Weight unit</label>
          <Select>
            <option>Kilogram (kg)</option>
          </Select>
        </div>
      </div>

      <h2 className="text-xl font-semibold mt-8 mb-2">Store Address</h2>
      <p className="text-gray-500 mb-6">This address will appear on your invoices.</p>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Legal name of company</label>
          <Input placeholder="Makostore" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm text-gray-600">Apartment, suite, or etc.</label>
            <Input placeholder="Makostore" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Address</label>
            <Input placeholder="4517 Washington Ave. Manchester" />
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">City</label>
            <Select>
              <option>Washington</option>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-600">Country or region</label>
            <Select>
              <option>United States</option>
            </Select>
          </div>
        </div>
      </div>

      <button className="bg-jadeite text-white px-6 py-2 rounded-lg mt-8 hover:opacity-90 transition-opacity">
        Save Changes
      </button>
    </div>
  );
};

export default General;
