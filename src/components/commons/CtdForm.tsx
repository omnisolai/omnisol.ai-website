import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwzuxj_kMIJpi98bPKFHLZtIBIYuwcQLylqTofdgDI8tDfC1Z0U4Vs48nw3Ub3Ln7aL/exec";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Full name is required")
    .min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface NotifyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const CtdForm: React.FC<NotifyPopupProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("FullName", data.name);
      formData.append("Email", data.email);
      formData.append("Message", data.message || "");
      formData.append("TimeStamp", new Date().toISOString());

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      if (response.status === 200) {
        reset();
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    reset();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal — formal, sharp, professional */}
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md mx-auto animate-bounce-in border border-gray-100">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <div>
            <h3 className="text-[17px] font-semibold text-gray-900 font-poppins">
              Get Notified When We Launch
            </h3>
            <p className="text-[13px] text-gray-400 mt-0.5">
              We'll send you a one-time email — no spam.
            </p>
          </div>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5">
          {!submitted ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              {/* Name */}
              <div className="flex flex-col items-start">
                <label className="text-[13px] font-medium text-gray-700 mb-1 text-left">
                  Full Name <span className="text-[#FD741D]">*</span>
                </label>
                <input
                  {...register("name")}
                  type="text"
                  placeholder="Your name"
                  className={`w-full border rounded-lg px-3 py-2.5 text-[14px] text-black bg-white outline-none focus:ring-1 focus:ring-[#FD741D] focus:border-[#FD741D] transition-all ${
                    errors.name ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.name && (
                  <span className="text-red-500 text-[12px] mt-1 text-left">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col items-start">
                <label className="text-[13px] font-medium text-gray-700 mb-1 text-left">
                  Email <span className="text-[#FD741D]">*</span>
                </label>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="your@email.com"
                  className={`w-full border rounded-lg px-3 py-2.5 text-[14px] text-black bg-white outline-none focus:ring-1 focus:ring-[#FD741D] focus:border-[#FD741D] transition-all ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-[12px] mt-1 text-left">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col items-start">
                <label className="text-[13px] font-medium text-gray-700 mb-1 text-left">
                  Message{" "}
                  <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <textarea
                  {...register("message")}
                  rows={3}
                  placeholder="Anything you'd like to tell us..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-[14px] text-black bg-white outline-none focus:ring-1 focus:ring-[#FD741D] focus:border-[#FD741D] transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-linear-to-b from-[#FD741D] to-[#A72201] text-white py-2.5 rounded-lg font-semibold text-[14px] transition-opacity duration-200 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
              >
                {isSubmitting ? "Submitting..." : "Notify Me"}
              </button>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center mx-auto mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#FD741D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-[18px] font-semibold text-gray-900 mb-2">
                You're on the list!
              </h3>
              <p className="text-gray-500 mb-6 text-[13px] leading-relaxed">
                We'll notify you as soon as we go live. Stay tuned!
              </p>
              <button
                onClick={handleClose}
                className="w-full bg-linear-to-b from-[#FD741D] to-[#A72201] text-white py-2.5 px-6 rounded-lg font-medium text-[14px] transition-opacity duration-200 hover:opacity-90"
              >
                Got it!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CtdForm;
