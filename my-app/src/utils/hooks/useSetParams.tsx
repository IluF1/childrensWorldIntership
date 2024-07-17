import { useEffect, useState } from "react";

export const useSetParam = (name: string, value: string) => {
  let currentUrl = new URL(window.location.href);

  useEffect(() => {
    currentUrl.searchParams.set(name, String(value));
    history.pushState({}, "", currentUrl);
  }, [value]);


};
