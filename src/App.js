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

import Contact from "Views/Main/Pages/Contact";
import GlobalCapability from "Views/Main/Pages/GlobalCapability/GlobalCapability";
import GlobalOverview from "Views/Main/Pages/GlobalCapability/GlobalOverview";
import GlobalInitiation from "Views/Main/Pages/GlobalCapability/GlobalInitiation";
import GlobalImplementation from "Views/Main/Pages/GlobalCapability/GlobalImplementation";
import GlobalOngoing from "Views/Main/Pages/GlobalCapability/GlobalOngoing";
import BuildOperator from "Views/Main/Pages/BuildOperator/BuildOperator";
import Managedteams from "Views/Main/Pages/Managedteams/Managedteams";
import ManagedOverview from "Views/Main/Pages/Managedteams/ManagedOverview";
import ManagedRelationship from "Views/Main/Pages/Managedteams/ManagedRelationship";
import ManagedRecord from "Views/Main/Pages/Managedteams/ManagedRecord";
import ManagedServices from "Views/Main/Pages/Managedteams/ManagedServices";
import BuildFeature from "Views/Main/Pages/BuildOperator/BuildFeature";
import BuildInitiation from "Views/Main/Pages/BuildOperator/BuildInitiation";
import Build from "Views/Main/Pages/BuildOperator/Build";
import BuildOperate from "Views/Main/Pages/BuildOperator/BuildOperate";
import Buildtransfer from "Views/Main/Pages/BuildOperator/Buildtransfer";
import ConsultingServices from "Views/Main/Pages/Solutions/ConsultingServices";
import ManagedService from "Views/Main/Pages/Solutions/ManagedService";
import WorkplaceSolution from "Views/Main/Pages/Solutions/WorkplaceSolution";
import TalentManagedSolution from "Views/Main/Pages/Solutions/TalentManagedSolution";
import SmartTalent from "Views/Main/Pages/Solutions/SmartTalent";
import AILedService from "Views/Main/Pages/Solutions/AILedService";


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

    <Route path="/details" element={<GlobalCapability />}>
    <Route index element={<GlobalOverview />} />
    <Route path="initiation" element={<GlobalInitiation />} />
    <Route path="implementation" element={<GlobalImplementation />} />
    <Route path="ongoing-support" element={<GlobalOngoing />} />
    </Route>

    <Route path="/build-operator" element={<BuildOperator />}>
    <Route index element={<BuildFeature />} />
    <Route path="initiation" element={<BuildInitiation />} />
    <Route path="build" element={<Build/>} />
    <Route path="operate" element={<BuildOperate />} />
    <Route path="transfer" element={<Buildtransfer />} />
    </Route>

    <Route path="/managed-teams" element={<Managedteams />}>
    <Route index element={<ManagedOverview/>} />
      <Route path="relationship" element={<ManagedRelationship />} />
      <Route path="record" element={<ManagedRecord />} />
      <Route path="services" element={<ManagedServices />} />
    </Route>

    <Route path="/contact" element={<Contact />} />
    <Route path="/consulting-services" element={<ConsultingServices />} />
    <Route path="/managed-services" element={<ManagedService/>} />
    <Route path="/workspace-solution" element={<WorkplaceSolution/>} />
    <Route path="/talent-solution" element={<TalentManagedSolution/>} />
    <Route path="/smart-talent" element={<SmartTalent/>} />
    <Route path="/ailed-service" element={<AILedService/>} />

  </Route>

  {/* page not found */}
  <Route path="*" element={<Error />} />
</Routes>

    </HelmetProvider >
    :
    <p>No internet connection</p>
}
export default App;