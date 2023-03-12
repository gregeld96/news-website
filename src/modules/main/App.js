import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Loading from "../../components/Loading/loader";
import Themeroutes from '../../config/routes';

function App() {
  const routing = useRoutes(Themeroutes);

  return (
    <Suspense fallback={<Loading />}>
      {routing}
    </Suspense>
  );
}

export default App;
