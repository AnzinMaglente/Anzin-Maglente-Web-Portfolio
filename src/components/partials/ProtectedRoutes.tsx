import { useEffect, type JSX } from "react";
import { useNavigate } from "react-router-dom";

// A way to redirect users to the admin page if they have already logged in.
export default function ProtectedRoutes({
  children,
}: {
  children: JSX.Element;
}) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!!localStorage.getItem("token")) {
      navigate("/admin", { replace: true });
    }
  });
  return <div>{children}</div>;
}
