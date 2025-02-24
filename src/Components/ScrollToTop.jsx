import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const excludedPaths = [
    "/details/implementation",
    "/details/ongoing-support",
    "/build-operator/build",
    "/build-operator/operate",
    "/build-operator/transfer",
    "/managed-teams/record",
    "/managed-teams/services",
    "/details/initiation",
    "/details/initiation",
    "/managed-teams/relationship",
    "/build-operator/initiation"

  ];

  useEffect(() => {
    if (!excludedPaths.includes(pathname)) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
