import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginUser } from "../../apis/auth";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";
import axios from "axios";

export default function AuthContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  async function handleSubmit(e: any) {
    e.preventDefault();
    let response = null;
    try {
      dispatch(showLoader());
      response = await loginUser(user);
      dispatch(hideLoader());
      if (response.success) {
        toast.success("Login successful!");
        localStorage.setItem("token", response.token);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.token}`;
        
        navigate("/admin", { replace: true });
      } else {
        toast.error(response.message || "Login failed.");
      }
    } catch (err) {
      dispatch(hideLoader());
      toast.error(response.message || "An error occurred during sign in.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-300 px-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-8 border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Main Panel */}
        <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
        <p className="text-gray-600 text-center mb-8">
          Sign in to continue to SneakSpeak
        </p>

        <div className="flex flex-row justify-between">
          {/* Login form */}
          <div>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl font-semibold cursor-pointer"
              >
                Sign In
              </button>
            </form>

            {/* Link to Sign in page */}
            <div className="text-center mt-6 text-gray-600">
              Don't have an account?{" "}
              <Link to="/signin">
                <a
                  className="text-blue-600 hover:underline cursor-pointer"
                  href="#"
                >
                  Create one
                </a>
              </Link>
            </div>
          </div>

          {/* Border separator */}
          <div className="place-self-center">
            <div className="inline-block h-[250px] min-h-[1em] w-0.5 mx-5 self-stretch bg-gray-700" />
          </div>

          {/* Other ways to login */}
          <div className="flex flex-col justify-center">
            <div className="flex py-2 my-3">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  localStorage.setItem(
                    "token",
                    credentialResponse.credential || ""
                  );
                  navigate("/admin", {
                    state: { credentialResponse },
                    replace: true,
                  });
                }}
                onError={() => console.log("Login failed")}
                width={240}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
