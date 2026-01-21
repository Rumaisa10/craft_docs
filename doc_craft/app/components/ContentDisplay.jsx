import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";
export default async function ContentDisplay({ id }) {
  const documentContent = await getDocumentContent(id);

  return (
    <article className="prose dark:prose-invert">
      <h1>{documentContent.data.title}</h1>
      <div>
        <span>Published On: {documentContent.data.date}</span> by{" "}
        <Link href={`/author/${documentContent.data.author}`}>
          {documentContent.data.author}
        </Link>{" "}
        under the{" "}
        <Link href={`/categories/${documentContent.data.category}`}>
          {documentContent.data.category}
        </Link>{" "}
        category.
      </div>
      <div>
        {documentContent.data.tags &&
          documentContent.data.tags.map((tag) => <Tag key={tag} tag={tag} />)}
      </div>
      <div
        className="[&>h2]:mt-8 [&>h3]:mt-6"
        dangerouslySetInnerHTML={{ __html: documentContent.contentHtml }}
      />
    </article>
  );
}
