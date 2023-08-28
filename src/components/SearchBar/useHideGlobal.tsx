import React, { useEffect, useRef } from "react";

function useHideGlobal(setShow: React.Dispatch<React.SetStateAction<boolean>>) {
  const ref = useRef<any>(null);
  const handleClickOutside = (event: any) => {
    // if hook has current and clicked target IS NOT the element than hide the element
    if (ref.current && !ref.current.contains(event.target)) {
      setShow(false);
      // if hook has current and clicked target IS the element, show the element
    } else if (ref.current && ref.current.contains(event.target)) {
      setShow(true);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return ref;
}

export default useHideGlobal;
