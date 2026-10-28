import { useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signinUser } from "../../apis/auth";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../../redux/loaderSlice";

export default function SignInContent() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [conpassword, setConpassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    let response = null;

    try {
      dispatch(showLoader());
      if (user.password !== conpassword) {
        toast.error("Passwords do not match");
      } else {
        response = await signinUser(user);
        dispatch(hideLoader());
        if (response.success) {
          toast.success("Sign in successful! Please log in.");
          navigate("/", { replace: true });
        } else {
          toast.error(response.message || "Sign in failed.");
        }
      }
    } catch (err) {
      dispatch(hideLoader());
      toast.error(response.message || "An error occurred during sign in.");
    }
  }

  return (
    <div className="min-h-screen flex px-4 items-center justify-center bg-gray-300">
      <div className="bg-white w-full max-w-2xl rounded-2xl p-8 mt-20 border-2 border-black shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
        {/* Main Header */}
        <h2 className="text-3xl font-bold text-center mb-2">Create Account</h2>
        <p className="text-gray-600 text-center mb-8">
          Sign up to get started with SneakSpeak
        </p>

        {/* Input Form */}
        <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              {/* Name */}
              <label className="block mb-1 font-medium">Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="John Doe"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>

            {/* Email*/}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-medium">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="•••••••"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="•••••••"
                value={conpassword}
                onChange={(e) => setConpassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-700 transition text-white rounded-xl font-semibold cursor-pointer"
            >
              Create Account
            </button>
          </form>

          {/* Link to Sign In */}
          <div className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link className="text-blue-600 hover:underline" to="/login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
