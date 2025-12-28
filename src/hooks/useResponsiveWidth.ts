import { useState, useEffect } from "react";

function useResponsiveWidth(mediaQuery: string) {
  const [queryMatch, setQueryMatch] = useState(false);

  useEffect(() => {
    const matchedMedia = window.matchMedia(mediaQuery);

    if (matchedMedia.matches !== queryMatch) {
      setQueryMatch(matchedMedia.matches);
    }

    const queryListener = () => setQueryMatch(matchedMedia.matches);

    window.addEventListener("resize", queryListener);

    return () => window.removeEventListener("resize", queryListener);
  }, [queryMatch, mediaQuery]);

  return queryMatch;
}

export default useResponsiveWidth;
