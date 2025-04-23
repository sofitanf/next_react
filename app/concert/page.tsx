import Link from "next/link";

export default async function Concert() {
  const data = await fetch(
    "https://fake-json-api.mock.beeceptor.com/companies"
  );
  const json: any[] = await data.json();
  console.log(json);

  return (
    <>
      {json.length > 0 ? (
        <ul>
          {json.map((item, idx) => (
            <li key={idx}>
              <Link href={`/concert/${item.id}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data</p>
      )}
    </>
  );
}
