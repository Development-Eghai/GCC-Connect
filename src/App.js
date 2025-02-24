import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { useCustomNavigate, useSize } from "Components/CustomHooks";
import {
  handleBearerToken,
  handleClearErrors,
  handleOnlineOffilne,
  handleScreenSize,
} from "Actions/Common_actions/Common_action";
import Login from "Views/Common/Login";
import Error from "Views/Common/error";
import Layout from "Views/Main/Layout/Layout";
import Home from "Views/Main/Pages/Home";
import About from "Views/Main/Pages/Aboutpage"
import BlogList from "./Components/BlogList"
import BlogDetails from "./Components/BlogDetails"
import Leadership from "Views/Main/Pages/LeadershipPage";
import Careers from "Views/Main/Pages/CareersPage";



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
import ScrollToTop from "Components/ScrollToTop";
import Click from "Views/Main/Pages/Products/Click";
import AdvantagePlus from "Views/Main/Pages/Products/AdvantagePlus";
import JobPage from "Views/Main/Pages/CareersPageDetail";

const App = () => {
  const { token, user_id, isOnline, Err, Toast_Type } = useSelector(
    (state) => state.commonState
  );
  const sizer = useSize();
  const dispatch = useDispatch();
  const navigate = useCustomNavigate();

  //initial state
  useEffect(() => {
    dispatch(handleOnlineOffilne(navigator.onLine));
    dispatch(handleScreenSize(sizer));
    dispatch(handleBearerToken(Cookies.get("token")));
  }, []);

  //error state
  useEffect(() => {
    if (Err) {
      toast(Err, {
        position: "top-right",
        type: Toast_Type,
        onOpen: () => dispatch(handleClearErrors),
        autoClose: 1600,
      });
      return;
    }
  }, [Toast_Type, Err, dispatch]);

  window.addEventListener("online", () => {
    dispatch(handleOnlineOffilne(true));
  });

  window.addEventListener("offline", () => {
    dispatch(handleOnlineOffilne(false));
  });

  return isOnline ? (
    <HelmetProvider>
      <ScrollToTop />
      <ToastContainer theme="light" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-page" element={<About />} />
          <Route path="/leadership-page" element={<Leadership />} />
          <Route path="/Careers-page" element={<Careers />} />
          <Route path="/blog"  element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
          <Route path="/careers-details" element={<JobPage />} />


          <Route path="/details" element={<GlobalCapability />}>
            <Route path="features" element={<GlobalOverview />} />
            <Route path="initiation" element={<GlobalInitiation />} />
            <Route path="implementation" element={<GlobalImplementation />} />
            <Route path="ongoing-support" element={<GlobalOngoing />} />
          </Route>

          <Route path="/build-operator" element={<BuildOperator />}>
            <Route path="bot_modal" element={<BuildFeature />} />
            <Route path="initiation" element={<BuildInitiation />} />
            <Route path="build" element={<Build />} />
            <Route path="operate" element={<BuildOperate />} />
            <Route path="transfer" element={<Buildtransfer />} />
          </Route>

          <Route path="/managed-teams" element={<Managedteams />}>
            <Route path="manage_overview" element={<ManagedOverview />} />
            <Route path="relationship" element={<ManagedRelationship />} />
            <Route path="record" element={<ManagedRecord />} />
            <Route path="services" element={<ManagedServices />} />
          </Route>
          <Route path="/products">
            <Route path="click-100" element={<Click />} />
            <Route path="advantage-plus" element={<AdvantagePlus />} />

          </Route>

          <Route path="/contact" element={<Contact />} />
          <Route path="/consulting-services" element={<ConsultingServices />} />
          <Route path="/managed-services" element={<ManagedService />} />
          <Route path="/workspace-solution" element={<WorkplaceSolution />} />
          <Route path="/talent-solution" element={<TalentManagedSolution />} />
          <Route path="/smart-talent" element={<SmartTalent />} />
          <Route path="/ailed-service" element={<AILedService />} />
        </Route>

        {/* page not found */}
        <Route path="*" element={<Error />} />
      </Routes>
    </HelmetProvider>
  ) : (
    <p>No internet connection</p>
  );
};
export default App;
