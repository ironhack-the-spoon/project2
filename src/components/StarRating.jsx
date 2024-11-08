const StarRating = ({ rating }) => {
  const totalStars = 5;
  const numericRating = Number(rating) || 0;

  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="flex items-center">
        {[...Array(totalStars)].map((_, index) => {
          const isFullStar = index < Math.floor(numericRating);
          const isHalfStar = !isFullStar && index < numericRating;

          return (
            <svg
              key={index}
              className={`w-4 h-4 mr-1 ${
                isFullStar
                  ? "text-yellow-300"
                  : isHalfStar
                  ? "text-yellow-300"
                  : "text-gray-300"
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              {isFullStar ? (
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.89 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
              ) : isHalfStar ? (
                <g>
                  <defs>
                    <clipPath id={`half-star-${index}`}>
                      <rect width="12" height="24" />
                    </clipPath>
                  </defs>
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.89 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    clipPath={`url(#half-star-${index})`}
                  />
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.89 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                    fill="transparent"
                  />
                </g>
              ) : (
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.89 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z"
                  fill="none"
                  stroke="currentColor"
                />
              )}
            </svg>
          );
        })}
      </div>
      
      <div className="flex space-x-1 mt-1 md:mt-0">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {numericRating.toFixed(1)}
        </p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          out of
        </p>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          {totalStars}
        </p>
      </div>
    </div>
  );
};

export default StarRating;
