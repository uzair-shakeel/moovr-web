import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import Header from "../../components/header";
import AccountDetailsModal from "../../components/settings/account-details-modal";
import { Link, useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [emailAlertsEnabled, setEmailAlertsEnabled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const toggleNotifications = () =>
    setNotificationsEnabled(!notificationsEnabled);
  const toggleEmailAlerts = () => setEmailAlertsEnabled(!emailAlertsEnabled);

  return (
    <div className=" text-start text-gray-700">
      <Header />
      <div className="p-6 max-w-5xl mx-auto  dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
        {/* Header */}
        <button
          onClick={() => navigate(-1)}
          className="flex gap-3 items-center mb-8 cursor-pointer py-2 px-3 rounded-[12px] w-fit hover:bg-gray-100"
        >
          <BiArrowBack size={23} /> Back
        </button>

        <div className="grid grid-cols-2 gap-24 justify-center ">
          <div>
            {/* Profile Section */}
            <div className="flex items-center gap-6 mb-8  h-[120px]">
              <img
                src="/images/avatar.png"
                alt="Profile"
                className="h-full w-[120px] border border-black rounded-full object-cover"
              />
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h2 className="text-[24px] font-[600] ">Mr. Edmund</h2>
                  <p className="text-sm text-gray-500">+234xxxxxxxxxx</p>
                </div>
                <button className="text-primaryPurple text-sm underline mb-5">
                  Change password
                </button>
              </div>
            </div>

            {/* Account Details */}
            <div className="mb-8 space-y-3 text-[16px]">
              <div className="flex justify-between mb-6 items-center">
                <h3 className="font-[600] ">Account details</h3>
                <button onClick={() => setIsModalOpen(true)}>
                  <img src="/icons/settings/edit.svg" alt="" />
                </button>
              </div>
              <div className="flex gap-5 items-center">
                <p>Name</p>
                <input
                  type="text"
                  placeholder="Mr. Edmond"
                  className="focus:outline-none"
                />
              </div>
              <div className="flex gap-5 items-center">
                <p>Phone</p>
                <input
                  type="number"
                  placeholder="+230 *******"
                  className="focus:outline-none"
                />
              </div>
              <div className="flex gap-5 items-center">
                <p>Email</p>
                <input
                  type="email"
                  placeholder="Edmund1235@gmail.com"
                  className="focus:outline-none"
                />
              </div>
            </div>

            {/* Language */}
            <div className="mb-8 space-y-3 text-[16px]">
              <div className="flex justify-between mb-6 items-center">
                <h3 className="font-[600] ">Language</h3>
                <Link to="/languages">
                  <button>
                    <img src="/icons/settings/edit.svg" alt="" />
                  </button>
                </Link>
              </div>
              <div className="flex gap-5 justify-between items-center">
                <p>Current language of App.</p>
                <div>
                  <p>Current language of App.</p>
                  <input
                    type="text"
                    placeholder="Mr. Edmond"
                    className="focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="font-bold">Language</h3>
                <p className="text-sm text-gray-500">
                  Current language of App.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold">English</span>
                <button className="text-gray-500">
                  <span className="material-icons">edit</span>
                </button>
              </div>
            </div>
          </div>
          <div>
            {/* Theme */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold">Theme</h3>
              <button
                onClick={toggleTheme}
                className={`w-12 h-6 rounded-full flex items-center px-1 ${
                  theme === "light" ? "bg-gray-200" : "bg-gray-700"
                }`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full transform ${
                    theme === "dark" && "translate-x-6"
                  }`}
                />
              </button>
            </div>

            {/* Notifications */}
            <div className="mb-8">
              <h3 className="font-bold">Notifications</h3>
              <div className="flex justify-between items-center mt-4">
                <span>Enable notifications</span>
                <button
                  onClick={toggleNotifications}
                  className={`w-12 h-6 rounded-full flex items-center px-1 ${
                    notificationsEnabled ? "bg-purple-600" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform ${
                      notificationsEnabled && "translate-x-6"
                    }`}
                  />
                </button>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Email alerts</span>
                <button
                  onClick={toggleEmailAlerts}
                  className={`w-12 h-6 rounded-full flex items-center px-1 ${
                    emailAlertsEnabled ? "bg-purple-600" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full transform ${
                      emailAlertsEnabled && "translate-x-6"
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Support and Feedback */}
            <div className="mb-8">
              <h3 className="font-bold">Support and feedback</h3>
              <div className="flex flex-col gap-2 mt-4">
                {[
                  { label: "Contact support", action: "Contact" },
                  { label: "Report an issue", action: "Report" },
                  { label: "Submit a feedback", action: "Submit" },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{item.label}</span>
                    <button className="text-purple-600">{item.action}</button>
                  </div>
                ))}
              </div>
            </div>

            {/* App Version */}
            <div className="flex justify-between items-center mb-8">
              <h3 className="font-bold">App version</h3>
              <span>Version 2.0.13</span>
            </div>

            {/* Delete Account */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold">Delete account?</h3>
                <p className="text-sm text-gray-500">
                  Do you want to delete your account permanently?
                </p>
              </div>
              <button className="text-primaryPurple px-6 py-2 rounded-full bg-lightPurple text-[16px] font-[600]">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && <AccountDetailsModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};

export default Settings;
