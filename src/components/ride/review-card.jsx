import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewCard = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-[430px] md:w-[430px] text-center space-y-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-start text-gray-900">
        Ratings and Feedback
      </h2>

      {/* Driver Information */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src="/images/avatar.png" // Replace with the actual image path
            alt="Driver"
            className="w-14 h-14 rounded-full"
          />
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">Adewale</h3>
            <div className="flex items-center text-yellow-500">
              <FaStar className="w-4 h-4" />
              <span className="text-sm font-medium ml-1">4.9</span>
            </div>
          </div>
        </div>
        <div className="text-sm flex items-center gap-3">
          <div>
            <p className="text-gray-500">Experience</p>
            <p className="font-medium text-gray-800">4 Years</p>
          </div>
          <div>
            <p className="text-gray-500">Language</p>
            <p className="font-medium text-gray-800">Eng, French</p>
          </div>
        </div>
      </div>

      {/* Ratings */}
      <div className="flex justify-between items-center">
        <p className="text-gray-700 font-medium ">Give Ratings</p>
        <div className="flex justify-center space-x-2">
          {[...Array(5)].map((_, index) => {
            const starIndex = index + 1;
            return (
              <button
                type="button"
                key={starIndex}
                className={`text-3xl ${
                  starIndex <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                }`}
                onClick={() => handleRating(starIndex)}
                onMouseEnter={() => setHover(starIndex)}
                onMouseLeave={() => setHover(0)}
              >
                <FaStar />
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback Text Area */}
      <textarea
        placeholder="Write your feedback here...."
        className="w-full h-24 p-3 border border-gray-300 rounded-xl text-sm text-gray-600 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
      ></textarea>

      {/* Submit Button */}
      <Link to={"/ride/thank-you"}>
        <button className="bg-purple-500 text-white py-3 mt-3 w-full rounded-full text-lg font-semibold hover:bg-purple-600">
          Submit
        </button>
      </Link>
    </div>
  );
};

export default ReviewCard;
