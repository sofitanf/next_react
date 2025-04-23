import { getDictionary } from './dictionaries';

export default async function Page({
  params,
}: Readonly<{ params: Promise<{ lang: Lang }> }>) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return <div>{dict.home.hello}</div>;
}
