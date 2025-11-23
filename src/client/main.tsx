import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import { AuthProvider } from "./context/index";
import { useLocation } from "react-router-dom";
import { useLayoutEffect } from "react";
const Wrapper = ({children}: {children: React.ReactNode}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}


createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <Wrapper>
          <App />
        </Wrapper>
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
