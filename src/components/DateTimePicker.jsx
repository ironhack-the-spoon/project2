import React, { useState } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from "../hook/useWindowSize";
import ConfirmationToast from "../assets/images/confirmation.png"

function ConfettiCelebration({ show }) {
  const { width, height } = useWindowSize();

  return show ? <Confetti width={width} height={height} /> : null;
}

const DateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [isBookingConfirmed, setIsBookingConfirmed] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handlePeopleChange = (event) => {
    setNumberOfPeople(event.target.value);
  };

  const handleDateFocus = (event) => {
    event.target.showPicker();
  };

  const isDisabled = !(selectedDate && selectedTime && numberOfPeople);
  const today = new Date().toISOString().split('T')[0];

  const timeOptions = [
    '12:00', '12:30', '13:00', '13:30', '14:00',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
  ];

  const handleConfirmBooking = () => {
    if (!isDisabled) {
      setIsBookingConfirmed(true);

      setTimeout(() => {
        setIsBookingConfirmed(false);
      }, 5000);
    }
  };

  return (
    <div className="max-w-lg w-full mx-auto bg-[#F1E6D8] border-2 border-[#06402B] rounded-lg shadow-lg p-6 mt-4 mb-4">
      <ConfettiCelebration show={isBookingConfirmed} />
      <div className="text-center text-lg font-semibold text-[#06402B] mb-4">
        When Can We Expect You?
      </div>
      <div className="space-y-4">
        <div className="relative">
          <label htmlFor="default-datepicker" className="block text-sm font-bold text-[#06402B] mb-2">
            Date
          </label>
          <input
            id="default-datepicker"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            onFocus={handleDateFocus}
            min={today}
            className="bg-white border border-[#06402B] text-[#06402B] text-sm rounded-lg focus:ring-[#06402B] focus:border-[#06402B] block w-full p-2.5"
            placeholder="Select date"
          />
        </div>
        <div className="relative">
          <label htmlFor="time-picker" className="block text-sm font-bold text-[#06402B] mb-2">
            Time
          </label>
          <select
            id="time-picker"
            value={selectedTime}
            onChange={handleTimeChange}
            className="bg-white border border-[#06402B] text-[#06402B] text-sm rounded-lg focus:ring-[#06402B] focus:border-[#06402B] block w-full p-2.5"
          >
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="relative">
          <label htmlFor="people-picker" className="block text-sm font-bold text-[#06402B] mb-2">
            Number of People
          </label>
          <select
            id="people-picker"
            value={numberOfPeople}
            onChange={handlePeopleChange}
            className="bg-white border border-[#06402B] text-[#06402B] text-sm rounded-lg focus:ring-[#06402B] focus:border-[#06402B] block w-full p-2.5"
          >
            {[...Array(8)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-6">
        <button
          className={`w-full py-2 px-4 rounded-lg focus:outline-none ${isDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-[#06402B] hover:bg-[#052B1D] text-white font-semibold'
            }`}
          onClick={handleConfirmBooking}
          disabled={isDisabled}
        >
          Confirm Booking
        </button>
      </div>
      {isBookingConfirmed && (
        <div className="fixed bottom-16 right-4 bg-white p-4 rounded-lg shadow-lg flex items-center space-x-3 w-80">
          <img
            src={ConfirmationToast} 
            alt="Confirmation Icon" 
            className="w-6 h-6"
          />
          <span className="text-sm text-[#06402B]">Your booking is confirmed</span>
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
