import ContentDisplay from "@/app/components/ContentDisplay";
export default async function page({ params }) {
  const { subContentId } = await params;
  return <ContentDisplay id={subContentId}></ContentDisplay>;
}
