import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import GradientButton from "@/ui/Button/Button";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";



// Zod validation schema
const formSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters long")
    .max(50, "Name must not exceed 50 characters"),

  email: z
    .string()
    .min(1, "Business email is required")
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^[\+]?[\d\s\-\(\)]{10,}$/,
      "Please enter a valid phone number"
    ),

  company: z
    .string()
    .min(1, "Company name is required")
    .min(2, "Company name must be at least 2 characters long")
    .max(100, "Company name must not exceed 100 characters"),

  website: z
    .string()
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(val);
      },
      "Please enter a valid website URL"
    ),

  budget: z.string().optional(),

  message: z
    .string()
    .min(1, "Please provide a message describing your project")
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must not exceed 1000 characters"),
});

// Infer TypeScript type from Zod schema
type FormData = z.infer<typeof formSchema>;

const ContactForm: React.FC = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur", // Validate on blur for better UX
  });

  const onSubmitForm = async (data: FormData) => {
    try {

      // Google Sheets script URL
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdFcqlsU9qMQPusPs0lmiSZhrEH6kTf5tDpUza9qDtkc3dCvrKc0NrbjjPU2iMIaU7Fg/exec";

      // Prepare data for Google Sheets
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('phone', data.phone);
      formData.append('company', data.company);
      formData.append('website', data.website || '');
      formData.append('budget', data.budget || '');
      formData.append('message', data.message);
      formData.append('timestamp', new Date().toISOString());

      // Send data to Google Sheets
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      if (response.status === 200) {
        // Reset form after successful submission
        reset();

        // Show success modal
        setShowSuccessModal(true);
      }


    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("There was an error submitting the form. Please try again.");
    }
  };




  return (
    <section className="min-h-screen flex items-center justify-center py-5 px-2">
      <div className="w-full max-w-5xl bg-formbg rounded-2xl p-8 shadow-sm">
        <h2 className="text-2xl  font-main font-medium text-black my-4 text-[30.23px] leading-[86.89px] tracking-[-0.018em]">
          Get in touch
        </h2>

        <form onSubmit={handleSubmit(onSubmitForm)} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Full Name *
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Full Name"
              className={`border font-Roboto font-normal text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 text-black ${errors.name ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
            )}
          </div>

          {/* Business Email */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Business Email *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="Business Email"
              className={`border font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 ${errors.email ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email.message}</span>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Phone Number *
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="Phone Number"
              className={`border font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 ${errors.phone ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm mt-1">{errors.phone.message}</span>
            )}
          </div>

          {/* Company Organization */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Company Organization *
            </label>
            <input
              {...register("company")}
              type="text"
              placeholder="Company Organization"
              className={`border font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 ${errors.company ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.company && (
              <span className="text-red-500 text-sm mt-1">{errors.company.message}</span>
            )}
          </div>

          {/* Website */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Website
            </label>
            <input
              {...register("website")}
              type="url"
              placeholder="Website (optional)"
              className={`border font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 ${errors.website ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.website && (
              <span className="text-red-500 text-sm mt-1">{errors.website.message}</span>
            )}
          </div>

          {/* Additional Field - You can customize this */}
          <div className="flex flex-col">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Project Budget (Optional)
            </label>
            <select
              {...register("budget")}
              className="border border-foamborder font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2"
            >
              <option value="">Select Budget Range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </select>
          </div>

          {/* Message */}
          <div className="flex flex-col sm:col-span-2">
            <label className="text-sm text-formtext mb-2 font-Roboto font-normal text-[16px] leading-[22px] tracking-[0em]">
              Message *
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Tell us about your project requirements..."
              className={`border font-Roboto font-normal text-black text-[16px] leading-6 tracking-[0em] bg-white rounded-lg px-2 py-2 resize-none ${errors.message ? 'border-red-500' : 'border-foamborder'
                }`}
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1">{errors.message.message}</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="sm:col-span-2 flex">

            <GradientButton
              type="submit"
              disabled={isSubmitting}
              text={isSubmitting ? 'Submitting...' : 'Book a meeting'}
              width="200px"
              height="55px"
              arrowSize="25px"
              arrowBgSize="40px"
              fontSize="17px"
              textTranslate="50px"
              arrowTranslate="-145px"
              hideArrowOnMobile={false}
            />

          </div>
        </form>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowSuccessModal(false)}
          />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-500 scale-100 animate-bounce-in">
            {/* Success Icon
            <div className="flex items-center justify-center pt-8 pb-4">
              <div className=" rounded-full flex items-center justify-center">
               <Check  />
              </div>
            </div>
             */}

            {/* Content */}
            <div className="p-8  text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Message Received!
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thank you for reaching out! We've received your message and will get back to you
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="w-full bg-gradient-to-b from-[#FD741D] to-[#A72201] text-white py-3 px-6 rounded-full font-medium  transition-all duration-200 transform hover:scale-105"
              >
                Got it!
              </button>
            </div>

            {/* Close X Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X width={25} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactForm;
