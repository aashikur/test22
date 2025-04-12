import React from "react";

const auctions = [
  {
    id: 1,
    name: "Vintage Leather Backpack",
    bid: 120.5,
    time: "3h 25m",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
  {
    id: 2,
    name: "Antique Pocket Watch",
    bid: 310,
    time: "5h 10m",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
  {
    id: 3,
    name: "Limited Edition Sneakers",
    bid: 480.75,
    time: "1d 2h",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
  {
    id: 4,
    name: "Gaming Headset",
    bid: 85,
    time: "2h 45m",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
  {
    id: 5,
    name: "Custom Artwork Canvas",
    bid: 230.99,
    time: "4d 6h",
    image: "https://via.placeholder.com/40",
    isFav: true,
  },
  {
    id: 6,
    name: "Wireless Bluetooth Speaker",
    bid: 65.49,
    time: "6h 20m",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
  {
    id: 7,
    name: "Collector’s Edition Comic Book",
    bid: 159.99,
    time: "12h 50m",
    image: "https://via.placeholder.com/40",
    isFav: false,
  },
];

const favorite = auctions.find((item) => item.isFav);

const ActiveAuctions = () => {
  return (
    <div className="bg-[#0c1022] min-h-screen text-white py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        {/* Left side */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-pink-500 mb-1">Active Auctions</h2>
          <p className="text-gray-300 mb-6">Discover and bid on extraordinary items</p>
          <div className="rounded-xl overflow-hidden">
            <div className="bg-gray-800 px-4 py-2 grid grid-cols-4 gap-4 font-semibold text-white border-b border-gray-700">
              <div className="col-span-2">Items</div>
              <div>Current Bid</div>
              <div>Time Left</div>
            </div>

            {auctions.map((item) => (
              <div
                key={item.id}
                className="bg-gray-900 px-4 py-4 grid grid-cols-4 gap-4 items-center border-b border-gray-800 hover:bg-gray-800 transition-all"
              >
                <div className="flex items-center gap-4 col-span-2">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span>{item.name}</span>
                </div>
                <div>${item.bid}</div>
                <div className="flex items-center justify-between">
                  {item.time}
                  <span className="text-xl cursor-pointer">
                    {item.isFav ? "❤️" : "🤍"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-80 bg-gray-900 rounded-xl p-4 border border-gray-800">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            <span className="text-pink-500">❤️</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text">
              Favorite Items
            </span>
          </h3>
          {favorite ? (
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img
                  src={favorite.image}
                  alt={favorite.name}
                  className="w-14 h-14 object-cover rounded"
                />
                <div className="flex-1">
                  <p>{favorite.name}</p>
                  <p className="text-sm text-gray-400">
                    ${favorite.bid} &nbsp; | &nbsp; Bids: 8
                  </p>
                </div>
                <span className="text-red-500 cursor-pointer">✖</span>
              </div>
              <div className="border-t border-gray-700 pt-3 text-right text-lg">
                Total bids Amount:{" "}
                <span className="text-pink-400">${favorite.bid}</span>
              </div>
            </div>
          ) : (
            <p className="text-gray-400">No favorites yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ActiveAuctions;
