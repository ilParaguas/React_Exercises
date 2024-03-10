import { useEffect, useRef } from "react";

export function FocusableInput() {
  const inputRef = useRef(null);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting component");
    }
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} name="myInput"></input>
    </div>
  );
}
