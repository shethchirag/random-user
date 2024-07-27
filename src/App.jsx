import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import axios from "axios";
import Header from "./components/Header";
import Error from "./components/Error";
import UserCardSkeleton from "./components/UserCardSkeleton";
import { BarLoader } from "react-spinners";

const UserCard = lazy(() => import("./components/UserCard"));

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://randomuser.me/api/";

  const fetchUser = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(url);
      setUser(response.data.results[0]);
    } catch (error) {
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="App min-h-screen flex flex-col">
      <Header />
      <span className="min-h-4">
        {loading && <BarLoader color="#000000" width={"100%"} />}
      </span>

      <div className="flex flex-grow justify-center items-center">
        <div className="container max-w-sm mx-auto p-4 text-center">
          {error && <Error message={error} />}
          <Suspense fallback={<UserCardSkeleton />}>
            {loading ? <UserCardSkeleton /> : user && <UserCard user={user} />}
          </Suspense>
          <button
            onClick={fetchUser}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 transition-transform duration-300 hover:scale-105"
            disabled={loading}
          >
            Fetch New User
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
