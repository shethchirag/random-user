import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const UserCardSkeleton = () => {
  return (
    <div className="max-w-sm min-h-[500px] rounded overflow-hidden shadow-lg my-4 p-4 bg-white">
      <Skeleton circle={true} height={320} style={{ maxWidth: "320px" }} />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">
          <Skeleton width={200} />
        </h2>
        <p className="text-gray-700 text-base">
          <Skeleton width={250} />
        </p>
        <p className="text-gray-700 text-base">
          <Skeleton width={250} />
        </p>
        <p className="text-gray-700 text-base">
          <Skeleton width={250} />
        </p>
      </div>
    </div>
  );
};

export default UserCardSkeleton;
