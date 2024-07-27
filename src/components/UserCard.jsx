import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const {
    picture: { large },
    name: { first, last },
    email,
    phone,
    location: { city, country },
  } = user;
  return (
    <div className="max-w-sm min-h-[500px] rounded overflow-hidden shadow-lg my-4 p-4 bg-white transition-transform duration-300 hover:scale-105">
      <img
        className="w-full rounded-full"
        src={large}
        alt={`${first} ${last}`}
      />
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{`${first} ${last}`}</h2>
        <p className="text-gray-700 text-base">{email}</p>
        <p className="text-gray-700 text-base">{phone}</p>
        <p className="text-gray-700 text-base">{`${city}, ${country}`}</p>
      </div>
    </div>
  );
};
UserCard.propTypes = {
  user: PropTypes.shape({
    picture: PropTypes.shape({
      large: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.shape({
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }).isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    location: PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default UserCard;
