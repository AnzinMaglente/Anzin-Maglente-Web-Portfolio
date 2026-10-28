import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminSettingsTab() {
  const navigate = useNavigate();

  const handleClick = async () => {
    await localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    navigate("/", { replace: true });
  };

  return (
    <div>
      <h2 className="mx-6 mt-9 mb-8 text-xl font-semibold text-blue-600">
        Settings
      </h2>

      <hr className="w-19/20 mx-auto my-6 border-gray-600" />

      {/* TODO: ADD MORE SETTINGS */}
      <div className="flex flex-col mx-6 ">
        <label text-xl font-semibold text-blue-600>
          Website Palette:
        </label>
        <ul className="ml-5 mb-3">
          <li>
            <input
              type="radio"
              id="PLT1"
              name="PLTs"
              value="PLT1"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Light Mode</label>
          </li>
          <li>
            <input
              type="radio"
              id="PLT2"
              name="PLTs"
              value="PLT2"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Dark Mode</label>
          </li>
          <li>
            <input
              type="radio"
              id="PLT3"
              name="PLTs"
              value="PLT3"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Alternate Dark Mode</label>
          </li>
        </ul>
        <label>Font Style:</label>
        <ul className="ml-5 mb-3">
          <li>
            <input
              type="radio"
              id="FNT1"
              name="FNTs"
              value="FNT1"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Arial</label>
          </li>
          <li>
            <input
              type="radio"
              id="FNT2"
              name="FNTs"
              value="FNT2"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Helvetica</label>
          </li>
          <li>
            <input
              type="radio"
              id="FNT3"
              name="FNTs"
              value="FNT3"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Georgia</label>
          </li>
          <li>
            <input
              type="radio"
              id="FNT4"
              name="FNTs"
              value="FNT4"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Verdana</label>
          </li>
          <li>
            <input
              type="radio"
              id="FNT5"
              name="FNTs"
              value="FNT5"
              className="cursor-pointer"
            />
            <label className="mx-2 cursor-pointer">Roboto</label>
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          className="mx-7 my-5 p-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow cursor-pointer"
          onClick={() => handleClick()}
        >
          Logout
        </button>
        <button className="mx-7 my-5 p-3 bg-slate-900 hover:bg-slate-800 text-white  transition rounded-xl shadow cursor-pointer">
          Save Options
        </button>
      </div>
    </div>
  );
}
