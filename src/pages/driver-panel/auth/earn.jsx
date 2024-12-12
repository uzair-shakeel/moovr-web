import { Link } from "react-router-dom";

export default function Earn() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-[1180px] bg-white rounded-2xl shadow-md p-8 relative overflow-hidden">
        {/* Bottom right curve */}
        <div className="absolute bottom-0 left-0 h-full">
          <img
            src="/driver/driver-bg-img-1.svg"
            alt=""
            className="h-full w-full object-contain "
          />
        </div>
        {/* Top left curve */}
        <div className="absolute top-0 right-0 ">
          <img
            src="/driver/auth/welcome.svg"
            alt=""
            className="transform rotate-90"
          />
        </div>

        {/* Money bag icon */}
        <div className="absolute bottom-8 left-40">
          <img src="/driver/bag.png" alt="" className="h-[200px] w-[200px]" />
        </div>

        {/* Content */}
        <div className="mx-auto max-w-[300px] relative">
          <h1 className="text-2xl font-semibold mb-2">Earn with MoovR</h1>
          <p className="text-gray-600 mb-8">
            Earn on your terms: when, where, and how you like.
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Where would you like to earn?
              </label>
              <input
                type="text"
                placeholder="Enter city name"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Referral (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter referral code"
                className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8257E9] focus:border-transparent"
              />
            </div>

            <div className="text-xs text-gray-500">
              By proceeding, I agree that MoovR or its representatives may
              contact me by email, phone number, sms (including by automatic
              telephone dialing system) at the email address or number I
              provide, including for marketing purpose.
            </div>

            <Link to="/d/account-types">
              <button className="w-full mt-6 bg-primaryPurple text-white py-3 rounded-lg hover:bg-[#7347d5] transition-colors">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
