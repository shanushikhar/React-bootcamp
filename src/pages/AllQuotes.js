import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_DATA = [
  { id: "1", author: "Bang", text: "Learn React" },
  { id: "2", author: "Sumakar", text: "Learn Node" },
];

export default function AllQuotes() {
  return <QuoteList quotes={DUMMY_DATA} />;
}
