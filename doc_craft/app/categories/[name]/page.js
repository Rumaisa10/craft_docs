import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getallCategories } from "@/utils/doc-utils";

export default async function CategoryPage({ params }) {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocs = getallCategories(docs, name);

  return <ContentDisplay id={matchedDocs[0].id}></ContentDisplay>;
}
