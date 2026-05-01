import React, { useState } from "react";
import GradientButton from "../../../../ui/Button/Button";

interface FormData {
  firstName: string;
  middleName: string;
  lastName: string;
  address1: string;
  address2: string;
  country: string;
  postalCode: string;
  state: string;
  city: string;
  primaryPhone: string;
  secondaryPhone: string;
}

const LongForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    postalCode: "",
    state: "",
    city: "",
    primaryPhone: "",
    secondaryPhone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 mb-20 bg-white "
    >
      <h2 className="font-Roboto font-normal text-[32px] leading-[52px] tracking-[0px] mb-6 text-black">
        My Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="John"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-inputborder rounded-md p-2 shadow-[0px_2px_4px_0px_#016CC140] font-Roboto  font-normal  text-formtext  text-[16px] leading-6 tracking-[0] align-middle"
            required
          />
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">Middle Name</label>
          <input
            type="text"
            name="middleName"
            placeholder="peter"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
          />
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-4">
        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Street Address (Line 1) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address1"
            placeholder="Enter house number, street"
            value={formData.address1}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          />
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Street Address (Line 2)
          </label>
          <input
            type="text"
            name="address2"
            placeholder="Local area, nearest landmark"
            value={formData.address2}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Place of Residence - Country <span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          >
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Zip/Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="postalCode"
            placeholder="Enter Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Place of Residence - State/Province{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          >
            <option value="">Select State</option>
            <option value="Punjab">Punjab</option>
            <option value="Sindh">Sindh</option>
          </select>
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Place of Residence - Region <span className="text-red-500">*</span>
          </label>
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          >
            <option value="">Select City</option>
            <option value="Lahore">Lahore</option>
            <option value="Karachi">Karachi</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Primary Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="primaryPhone"
            placeholder="Enter Primary Phone number"
            value={formData.primaryPhone}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
            required
          />
        </div>

        <div>
          <label className="font-Roboto font-normal text-[16px] leading-[22px] text-formtext tracking-[0] align-middle mb-2">
            Secondary Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="secondaryPhone"
            placeholder="Enter Phone number"
            value={formData.secondaryPhone}
            onChange={handleChange}
            className="w-full border border-foamborder rounded-md p-2 font-Roboto  font-normal text-foamtext"
          />
        </div>
      </div>


      <div className="mt-10">
        <GradientButton
        to="/contact"
          text="Apply"
          fromColor="from-orange"
          toColor="to-orange-100"
          width="120px"
          height="60px"
          textTranslate="55px"
          arrowTranslate="-55px"
          fontSize="14px"
          arrowSize="20px"
          arrowBgSize="45px"
        />
      </div>
    </form>
  );
};

export default LongForm;
