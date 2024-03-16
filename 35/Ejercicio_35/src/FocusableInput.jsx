import { useEffect, useRef } from "react";
import Form from "react-bootstrap/Form";

export function FocusableInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Write input</Form.Label>
        <Form.Control as="textarea" ref={inputRef} />
      </Form.Group>
    </Form>
  );
}
