import React from "react";
import { AUTH } from "../utils/helpers/AuthCookies";
import { Outlet } from "react-router-dom";
import ErrorPage from "../pages/Error";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ID_PRODI, NAME_PRODI } from "../redux/prodiSlice";

function AdminRoute() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (AUTH.getRole() === "1") {
      dispatch(ID_PRODI("6021"));
      dispatch(NAME_PRODI("PSM"));
    } else if (AUTH.getRole() === "2") {
      dispatch(ID_PRODI("22201"));
      dispatch(NAME_PRODI("Medicine"));
    } else if (AUTH.getRole() === "3") {
      dispatch(ID_PRODI("26201"));
      dispatch(NAME_PRODI("Surgery"));
    }
  }, [dispatch]);

  if (
    (AUTH.setAuth() && AUTH.getRole() === "1") ||
    AUTH.getRole() === "2" ||
    AUTH.getRole() === "3"
  )
    return <Outlet />;
  return (
    <ErrorPage
      code="403"
      title="Forbidden : You don't have permission to access this page"
    />
  );
}

export default AdminRoute;
