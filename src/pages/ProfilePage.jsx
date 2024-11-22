// src/components/ProfilePage.js
import { FaEdit } from 'react-icons/fa'; // Edit icon for updating profile

const ProfilePage = () => {
  const currentUser = {
    displayName: "Md Humaun Kabir Parvez",
    photoURL: "https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745",
    email: "parvez@example.com",
  };

  if (!currentUser) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      {/* Cover Section */}
      <div className="relative bg-cover bg-center h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">
          Welcome, {currentUser.displayName || "User"}
        </h1>
      </div>

      {/* Profile Content */}
      <div className="max-w-5xl mx-auto p-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Profile Header */}
          <div className="flex items-center p-6 space-x-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            {/* User Photo */}
            <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white">
              <img
                src={currentUser.photoURL || "/path/to/default-avatar.jpg"}
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            {/* User Info */}
            <div>
              <h2 className="text-3xl font-semibold">{currentUser.displayName || "Your Name"}</h2>
              <p className="text-lg">{currentUser.email}</p>
            </div>

            {/* Edit Profile Button */}
            <button
              className="ml-auto flex items-center justify-center w-10 h-10 rounded-full bg-white text-purple-600 hover:bg-gray-200"
              title="Edit Profile"
            >
              <FaEdit size={20} />
            </button>
          </div>

          {/* Update Section */}
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-800">Update Profile</h3>
            <p className="text-gray-600 mt-2">
              Update your profile information or photo using the form below.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your full name"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  defaultValue={currentUser.displayName}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email address"
                  className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  defaultValue={currentUser.email}
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:ring-4 focus:ring-purple-400"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
