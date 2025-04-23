import Loader from "@/app/_components/Loader";
import { Suspense } from "react";

async function DetailConcert({ params }: Readonly<{ params: { id: string } }>) {
  const data = await fetch(
    `https://fake-json-api.mock.beeceptor.com/companies/${params.id}`
  );
  const json = await data.json();

  return <h1>Concert {json.name} page</h1>;
}

export default function DetailConcertPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <Suspense fallback={<Loader />}>
      <DetailConcert params={params} />
    </Suspense>
  );
}
