import { Fragment } from "react";

/** Mengubah teks berformat **tebal** menjadi elemen strong. */
export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((part, index) =>
        index % 2 === 1 ? <strong key={index}>{part}</strong> : <Fragment key={index}>{part}</Fragment>,
      )}
    </>
  );
}
