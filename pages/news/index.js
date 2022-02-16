// domain.com/news/

import { Fragment } from "react";
import Link from "next/link";

const NewsPage = () => {
  return (
    <Fragment>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/test-route"> test route</Link>
        </li>
        <li>
          <Link href="/news/second-test-route">second test route</Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
