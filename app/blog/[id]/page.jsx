import { client } from "@/sanity/lib/client";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { fetchBlogPosts } from "@/sanity/lib/fetchBlogPosts";


export default async function BlogDetailPage({ params }) {
  const { id } = params;
 const data = await fetchBlogPosts();
  const post = data?.find((post) => post.slug.current === id) || {};




  // const [post, setPost] = useState({});
  // useEffect(() => {
  //   const load = async () => {
  //     const data = await fetchBlogPosts();

  //      const post = data?.find((post) => post.slug.current === id);

  
  //     setPost(post || {});
  //   }
  //   load();
 
  // }, [id]);

  

  return (
   <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={post.title || "Blog Post"}>
      <section className="py-5">
        <div className="container">
          <div className="mb-4">
            {post.mainImage?.asset?.url && (
              <Image
                src={post.mainImage.asset.url}
                alt={post.mainImage.alt || post.title}
                width={900}
                height={400}
                className="w-100 rounded mb-3"
                style={{ objectFit: "cover", maxHeight: 400 }}
              />
            )}
            <h1 className="fw-bold">{post.title}</h1>
            <div className="text-muted mb-2">
              <span>By {post.author || "Admin"}</span> |{" "}
              <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            <p className="lead">{post.excerpt}</p>
          </div>
          <div>
            {/* Render body as rich text if available, otherwise as plain text */}
            {Array.isArray(post.body) ? (
              <PortableText value={post.body} />
            ) : (
              <div>{post.body}</div>
            )}
          </div>
          <div className="mt-4">
            <Link href="/blog" className="btn btn-outline-primary">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}