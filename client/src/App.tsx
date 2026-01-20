import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useLocation } from "react-router-dom";

// Redux
import { AppDispatch, RootState } from "./redux/store";
import { fetchCartThunk } from "./redux/slices/cart-slice";

// Estructura y Rutas
import "./App.css";
import { Header } from "./components/layout/header";
import { Footer } from "./components/layout/footer";
import { Home, FormUser } from "./pages/public";
import { Cart } from "./pages/private";
import { RoutesWithNotFound } from "./utils";
import { PublicRoutes, PrivateRoutes } from "./routes";
import { AuthGuard } from "./guards";

function App() {
  const location = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  // Obtenemos el usuario del estado global
  const { user } = useSelector((state: RootState) => state.auth);
  const isAuthPage = location.pathname === PublicRoutes.AUTH;

  useEffect(() => {
    let guestId = localStorage.getItem("guestId");
    if (!guestId) {
      guestId = crypto.randomUUID();
      localStorage.setItem("guestId", guestId);
    }

    if (user?._id) {

      dispatch(fetchCartThunk({ userId: user._id }));
    } else {
      dispatch(fetchCartThunk({ guestId }));
    }
  }, [user?._id, dispatch]);

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
