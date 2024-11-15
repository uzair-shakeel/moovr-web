import React from "react";

const Activity = () => {
  const activities = [
    {
      date: "Today",
      items: [
        {
          time: "9:55AM",
          description: "You have successfully Payout for a ride",
          icon: "https://via.placeholder.com/40",
        },
        {
          time: "7:50AM",
          description: "Your parcel has successfully been delivered",
          icon: "https://via.placeholder.com/40",
        },
      ],
    },
    {
      date: "04/09/2024",
      items: [
        {
          time: "7:50AM",
          description: "Your ride has ended.",
          icon: "https://via.placeholder.com/40",
        },
        {
          time: "7:50AM",
          description: "Your ride has been scheduled successfully.",
          icon: "https://via.placeholder.com/40",
        },
        {
          time: "7:50AM",
          description: "Your account has been recharged.",
          icon: "https://via.placeholder.com/40",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Activity Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <button className="text-purple-600 font-bold text-xl mr-4">
              &#8592;
            </button>
            <h1 className="text-2xl font-bold">Activity</h1>
          </div>
          <button className="bg-purple-100 text-purple-600 px-4 py-2 rounded-md text-sm">
            All
          </button>
        </div>

        {/* Activity List */}
        {activities.map((activity, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-gray-500 text-sm font-semibold mb-4">
              {activity.date}
            </h2>
            <div className="space-y-3">
              {activity.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex justify-between items-center bg-white p-4 shadow-md rounded-lg"
                >
                  <div className="flex items-center">
                    <img
                      src={item.icon}
                      alt="icon"
                      className="w-10 h-10 mr-4 rounded-full"
                    />
                    <div>
                      <p className="text-gray-700 font-medium">
                        {item.description}
                      </p>
                      <p className="text-gray-500 text-sm mt-1">{item.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <button className="text-purple-600 hover:text-purple-800 mr-4">
                      &#9654;
                    </button>
                    <button className="bg-purple-100 text-purple-600 p-2 rounded-md">
                      &#128465;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activity;
