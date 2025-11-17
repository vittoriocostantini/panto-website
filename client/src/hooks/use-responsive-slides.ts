import { useEffect, useState } from "react";

type ResponsiveRule = {
  maxWidth: number;
  slidesToShow: number;
};

type UseResponsiveSlidesOptions = {
  initialSlides: number;
  rules: ResponsiveRule[];
  fallbackSlides: number;
};

function resolveSlidesToShow(
  width: number,
  rules: ResponsiveRule[],
  fallbackSlides: number
) {
  const match = rules.find((rule) => width < rule.maxWidth);
  return match ? match.slidesToShow : fallbackSlides;
}

export function useResponsiveSlides({
  initialSlides,
  rules,
  fallbackSlides,
}: UseResponsiveSlidesOptions) {
  const [slidesToShow, setSlidesToShow] = useState(initialSlides);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSlidesToShow(resolveSlidesToShow(width, rules, fallbackSlides));
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [rules, fallbackSlides]);

  return { slidesToShow, setSlidesToShow };
}


