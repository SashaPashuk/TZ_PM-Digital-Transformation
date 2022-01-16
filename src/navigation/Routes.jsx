import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("../pages/homePage/HomePage"));
const FindEmployees = lazy(() =>
  import("../pages/findEmployees/FindEmployees"),
);

const Path = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/TZ_PM-Digital-Transformation" element={<FindEmployees title="Find employees" />} exact />
        <Route
          path="/TZ_PM-Digital-Transformation/find"
          element={<FindEmployees title="Find employees" />}
          exact
        />
      </Routes>
    </Suspense>
  );
};

export default Path;
