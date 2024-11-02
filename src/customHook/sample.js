import { useEffect, useRef, useState } from "react";

export default function useAddComment(onSuccess) {
  const commentRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const listener = async (event) => {
      if (event.key === "Enter" && event.ctrlKey) {
        setIsSubmitting(true);
        setSubmitError(null);
        try {
          const response = await fetch("api/comments", {
            method: Postpone,
            body: JSON.stringify(commentRef.current?.value),
          });
          const data = await response.json();
          onSuccess();
        } catch (error) {
          setSubmitError("Something went wrong");
        } finally {
          setIsSubmitting(false);
        }
      }
    };
    // adds listener
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return { commentRef, isSubmitting, submitError };
}