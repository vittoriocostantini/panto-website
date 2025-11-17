import { ArrowRightAlt } from "@mui/icons-material";
import { type ButtonCarouselProps } from "../../types";


const ButtonCarousel = ({ onClick, direction, ariaLabel }: ButtonCarouselProps) => {
  const positionClass = direction === "left" ? "left-10" : "right-10";
  const iconRotation = direction === "left" ? "rotate(180deg)" : "none";

  return (
    <button
      onClick={onClick}
      className={`absolute ${positionClass} top-1/2 cursor-pointer  -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white  flex items-center justify-center hover:bg-gray-50 transition-colors`}
      aria-label={ariaLabel}
    >
      <ArrowRightAlt sx={{ fontSize: 30, transform: iconRotation }} />
    </button>
  );
};

export default ButtonCarousel;

