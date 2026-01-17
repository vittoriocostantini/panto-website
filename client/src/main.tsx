import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
        <Wrapper>
          <App />
        </Wrapper>
    </BrowserRouter>
);
