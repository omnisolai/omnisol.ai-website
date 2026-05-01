import { useState } from "react";

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const handleDateClick = (day: number) => {
    setSelectedDate(day);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden w-full max-w-5xl">
      {/* Left Side */}
      <div className="md:w-1/2 p-8 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col items-start">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-yellow-400" />
          <div>
            <p className="text-sm text-gray-500">Account name</p>
            <h2 className="text-lg font-semibold">Event title</h2>
          </div>
        </div>

        <p className="text-gray-700 mb-2">🕒 30 min</p>
        <p className="text-gray-500 text-sm">
          Web conferencing details provided upon confirmation.
        </p>

        <div className="flex items-center gap-4 mt-auto pt-6 text-sm text-gray-500">
          <p>Cookie settings</p>
          <p>Report abuse</p>
        </div>
      </div>

      {/* Right Side */}
      <div className="md:w-1/2 p-8">
        <h3 className="text-lg font-medium mb-4">Select a Date & Time</h3>

        {/* Calendar */}
        <div className="grid grid-cols-7 gap-3 mb-6">
          {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => (
            <button
              key={day}
              onClick={() => handleDateClick(day)}
              className={`w-10 h-10 cursor-pointer rounded-full flex items-center justify-center ${
                selectedDate === day
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              } transition-all`}
            >
              {day}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500">
          🌍 Central European Time (8:11 PM)
        </p>

        <div className="mt-8">
          <button className="border border-gray-300  cursor-pointer rounded-full px-6 py-2 text-sm hover:bg-gray-100">
            Troubleshooting
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingSection;
