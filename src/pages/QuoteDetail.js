import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";

export default function QuoteDetail() {
  const param = useParams();
  return (
    <Fragment>
      <h1>QuoteDetail</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        <Comments />
      </Route>
      {/* <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route> */}
    </Fragment>
  );
}
