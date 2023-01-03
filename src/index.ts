import { useEffect } from "react";
import { ToukeyOptions, ToukeyHandler } from "toukey/dist/src/types";
import { subscribe } from "toukey";

function useToukey(
  key: string,
  handler: ToukeyHandler,
  options?: ToukeyOptions
) {
  useEffect(() => {
    return subscribe(key, handler, options);
  }, []);
}

export * from "toukey";
export { useToukey };
