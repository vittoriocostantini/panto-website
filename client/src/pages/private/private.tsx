import { RoutesWithNotFound } from "../../utils/";
import { Route } from "react-router-dom";
import { PrivateRoutes } from "../../models";
import Cart from "./cart/cart";

function Private() {
  return (
    <RoutesWithNotFound>
      <Route path={PrivateRoutes.CART} element={<Cart />} />
    </RoutesWithNotFound>
  )
}

export default Private
