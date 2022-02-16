import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();
  const query = router.query.newsId;
  console.log(query);

  return <h1>The Details Page</h1>;
};

export default DetailsPage;
