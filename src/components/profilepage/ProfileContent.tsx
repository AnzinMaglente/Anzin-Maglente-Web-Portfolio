import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import ProfileEmailComponent from "./ProfileEmailComponent";

export default function ProfileContent() {
  return (
    <div className=" bg-gray-300 pt-25 pb-10">
      <div className="h-245 px-38 bg-gradient-to-b from-white-2 from-1% via-secondary">
        {/* Header */}
        <h1 className="text-3xl font-semibold mb-4">Your Profile</h1>

        <div className="bg-white shadow-md rounded-2xl p-8">
          {/* Top Profile Card */}
          <div className="flex w-full justify-between bg-white shadow-sm rounded-2xl p-8">
            <div className="flex">
              <div className="w-20 h-20 bg-gray-500" />
              {/* Insert profile picture here */}
              <div className="flex-col mx-5 content-center">
                <p>Username</p>
                <p className="text-gray-500">username@gmail.com</p>
              </div>
            </div>

            <button className="h-10 px-3 self-center bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow">
              Edit Profile
            </button>
          </div>

          {/* Information Form */}
          <div className="flex w-full my-5 justify-between">
            <div className="flex flex-col w-24/50">
              {/* Full Name */}
              <label className="my-2 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="h-15 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Gender */}
              <label className="my-2 text-sm font-medium text-gray-700">
                Gender
              </label>
              <Select
                label="Gender"
                className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>

              {/* Langauges*/}
              <label className="my-2 text-sm font-medium text-gray-700">
                Languages
              </label>
              <Select
                label="Language"
                className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <MenuItem value={"English"}>English</MenuItem>
                <MenuItem value={"Germary"}>Arabic</MenuItem>
                <MenuItem value={"French"}>Spanish</MenuItem>
                <MenuItem value={"Arabic"}>French</MenuItem>
              </Select>
            </div>

            {/* Nickname */}
            <div className="flex flex-col w-24/50">
              <label className="my-2 text-sm font-medium text-gray-700">
                Nickname
              </label>
              <input
                type="text"
                className="h-15 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />

              {/* Country */}
              <label className="my-2 text-sm font-medium text-gray-700">
                Country
              </label>
              <Select
                label="Country"
                className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <MenuItem value={"North America"}>North America</MenuItem>
                <MenuItem value={"South America"}>South America</MenuItem>
                <MenuItem value={"Asia"}>Asia</MenuItem>
                <MenuItem value={"Europe"}>Europe</MenuItem>
                <MenuItem value={"Middle East"}>Middle East</MenuItem>
              </Select>

              {/* Timezone */}
              <label className="my-2 text-sm font-medium text-gray-700">
                Timezone
              </label>
              <Select
                label="Timezone"
                className="border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <MenuItem value={"GMT"}>UTC</MenuItem>
                <MenuItem value={"EST"}>GMT</MenuItem>
                <MenuItem value={"UTC"}>PST</MenuItem>
                <MenuItem value={"IST"}>EST</MenuItem>
              </Select>
            </div>
          </div>

          {/* Email Addresses*/}
          <label className="my-2">Email Addresses:</label>
          <div className="max-h-50 my-5 overflow-y-scroll">
            <ProfileEmailComponent />
            <ProfileEmailComponent />
            <ProfileEmailComponent />
            <ProfileEmailComponent />
          </div>
          <button className="h-10 px-3 my-2 self-center bg-slate-900 hover:bg-slate-800 text-white transition rounded-xl shadow">
            +Add Email Address
          </button>
        </div>
        {/* Save Changes */}
        <div className="flex mt-5 justify-end">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-md">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
