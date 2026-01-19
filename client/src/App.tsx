import "./App.css";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Home, FormUser } from "./pages/public";
import { Cart } from "./pages/private";
import { RoutesWithNotFound } from "./utils";
import { Route, useLocation } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { AuthGuard } from "./guards";

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === PublicRoutes.AUTH;

  return (
    <div className="bg-white">
      {!isAuthPage && <Header />}
      <RoutesWithNotFound>
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route
          path={PrivateRoutes.CART}
          element={
            <AuthGuard>
              <Cart />
            </AuthGuard>
          }
        />
        <Route path={PublicRoutes.AUTH} element={<FormUser />} />
      </RoutesWithNotFound>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
