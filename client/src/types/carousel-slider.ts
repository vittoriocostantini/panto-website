import type { ReactNode } from "react";
import type { Settings } from "react-slick";

export interface CarouselSliderProps {
  items: ReactNode[];
  settings?: Settings;
  showArrows?: boolean;
  emptyMessage?: string;
}
