import { Routes, Route } from "react-router-dom";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function RoutesWithNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div className="text-center text-2xl font-bold h-screen flex items-center justify-center">Not Found</div>} />
    </Routes>
  );
}

export default RoutesWithNotFound;
