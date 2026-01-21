import ContentDisplay from "@/app/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { getallAuthors } from "@/utils/doc-utils";

export default async function AuthorPage({ params }) {
  const { name } = await params;
  const docs = getDocuments();
  const matchedDocs = getallAuthors(docs, name);

  return <ContentDisplay id={matchedDocs[0].id}></ContentDisplay>;
}
