import "./App.css";
import { Header, Footer } from "./components/layout";
import { Home, AuthUser } from "./pages/public";
import Cart from "./pages/private/cart/cart";
import { RoutesWithNotFound } from "./utils/";
import { Route, useLocation } from "react-router-dom";
import { PublicRoutes, PrivateRoutes } from "./models";
import { AuthGuard } from "./guards";
function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === PublicRoutes.AUTH;

  return (
    <div className="bg-white">
      {!isAuthPage && <Header />}
      <RoutesWithNotFound>
        <Route path={PublicRoutes.HOME} element={<Home />} />
        <Route element={<AuthGuard />}>
          <Route path={PrivateRoutes.CART} element={<Cart />} />
        </Route>
        <Route path={PublicRoutes.AUTH} element={<AuthUser />} />
      </RoutesWithNotFound>
      {!isAuthPage && <Footer />}
    </div>
  );
}

export default App;
