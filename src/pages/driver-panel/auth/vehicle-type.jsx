export default function VehicleTypes() {
  const vehicles = [
    {
      title: "MoovR X",
      description: "You want to drive four door vehicle on MoovR platform.",
    },
    {
      title: "MoovR Mini",
      description:
        "You want to drive four door mini vehicle on MoovR platform.",
    },
    {
      title: "MoovR Electric",
      description: "You want to drive electric vehicle on MoovR platform.",
    },
  ];

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

        {/* Content */}
        <div className="relative mx-auto max-w-[300px]">
          <h1 className="text-2xl font-semibold mb-8">
            Choose how would you like to earn with MoovR
          </h1>

          <div className="space-y-4">
            {vehicles.map((vehicle) => (
              <button
                key={vehicle.title}
                className="w-full p-4 bg-gray-50 h-[120px] border border-gray-300 rounded-lg text-left hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-medium mb-2">{vehicle.title}</h3>
                <p className="text-sm text-gray-500">{vehicle.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
