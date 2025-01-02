import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import Cookies from 'js-cookie'

import { useCustomNavigate, useSize } from "Components/CustomHooks";
import { handleBearerToken, handleClearErrors, handleOnlineOffilne, handleScreenSize } from "Actions/Common_actions/Common_action";
import Login from "Views/Common/Login";
import Error from "Views/Common/error";
import Layout from "Views/Main/Layout/Layout";
import Home from "Views/Main/Pages/Home";


const App = () => {
  const { token, user_id, isOnline, Err, Toast_Type } = useSelector((state) => state.commonState);
  const sizer = useSize();
  const dispatch = useDispatch();
  const navigate = useCustomNavigate();

  //initial state
  useEffect(() => {
    dispatch(handleOnlineOffilne(navigator.onLine))
    dispatch(handleScreenSize(sizer))
    dispatch(handleBearerToken(Cookies.get("token")))
  }, [])

  //error state
  useEffect(() => {
    if (Err) {
      toast(Err, {
        position: "top-right",
        type: Toast_Type,
        onOpen: () => dispatch(handleClearErrors),
        autoClose: 1600
      })
      return
    }
  }, [Toast_Type, Err, dispatch])

  window.addEventListener('online', () => {
    dispatch(handleOnlineOffilne(true))
  });

  window.addEventListener('offline', () => {
    dispatch(handleOnlineOffilne(false))
  });

  return isOnline ?
    <HelmetProvider>
      <ToastContainer theme='light' />
      <Routes>


        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        {/* page not found  */}
        <Route path="*" element={<Error />} />
      </Routes>
    </HelmetProvider >
    :
    <p>No internet connection</p>
}
export default App;