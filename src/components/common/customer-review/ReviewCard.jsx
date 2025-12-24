const ReviewCard = ({ item }) => {
  return (
    <div className="bg-white w-full min-h-[260px] p-6 rounded-[20px] space-y-3">
      <div className="flex gap-2 items-center">
        <img src={item.profilePic} alt={item.name} className="w-10 h-10" />
        <div className="space-y-1">
          <div className="flex items-center gap-1">
            <div className="text-xs font-semibold text-[#430C41]">
              {item.name}
            </div>
            <img src="checkMark.png" alt="checkMark" className="w-4 h-4" />
          </div>
          <div className="text-xs text-[#484548]">{item.Place}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center">
          {new Array(5).fill(0).map((_, starIndex) => (
            <div
              className={`${
                starIndex + 1 <= item.rating
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              key={starIndex}
            >
              &#9733;
            </div>
          ))}
        </div>
        <div className="text-xs text-[#0F0F0F99]">{item.daysAgo} days ago</div>
      </div>
      <p className="text-[#245237]">{item.review}</p>
      <div className="flex gap-2 items-center">
        <img src="google.png" alt="google" className="w-6 h-6" />
        <div className="text-[#1E1E1E]">
          Posted on <span className="font-semibold">Google</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
