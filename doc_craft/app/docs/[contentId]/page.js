import ContentDisplay from "@/app/components/ContentDisplay";

export default async function page({ params }) {
  const { contentId } = await params;
  return <ContentDisplay id={contentId}></ContentDisplay>;
}
