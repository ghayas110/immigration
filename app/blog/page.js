"use client"
import Link from "next/link";
import Layout from "@/components/layout/Layout";
import { fetchBlogPosts } from "@/sanity/lib/fetchBlogPosts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchBlogPosts();
      setPosts(data);
    };
    load();
  }, []);

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Blog">
      <section className="sidebar-page-container blog-standard p_relative">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Blog Content */}
            <div className="col-lg-8 col-md-12 col-sm-12 content-side">
              <div className="blog-standard-content">
                {posts.map((post) => (
                  <div key={post._id} className="news-block-one mb_40">
                    <div className="inner-box">
                      <figure className="image-box">
                        <Link href={`/blog/${post.slug.current}`}>
                          <Image
                            src={post.mainImage?.asset?.url}
                            alt={post.mainImage?.alt || post.title}
                            width={800}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </Link>
                      </figure>
                      <div className="lower-content">
                        <ul className="post-info clearfix">
                          <li>
                            <i className="icon-27"></i>
                            <Link href={`/blog/${post.slug.current}`}>Admin</Link>
                          </li>
                          <li>
                            <i className="icon-56"></i>
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </li>
                          <li>
                            <i className="icon-57"></i>
                            <Link href={`/blog/${post.slug.current}`}>00 Comments</Link>
                          </li>
                        </ul>
                        <h3>
                          <Link href={`/blog/${post.slug.current}`}>
                            {post.title}
                          </Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <div className="link-btn">
                          <Link href={`/blog/${post.slug.current}`}>
                            <span>Read More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
              <div className="default-sidebar blog-sidebar ml_10">
                {/* Search Widget */}
                <div className="sidebar-widget search-widget">
                  <div className="widget-title">
                    <h3>Search</h3>
                  </div>
                  <div className="search-form">
                    <form action="blog" method="post">
                      <div className="form-group">
                        <input type="search" name="search-field" placeholder="Keyword ..." required />
                        <button type="submit"><i className="icon-8"></i></button>
                      </div>
                    </form>
                  </div>
                </div>

                {/* Category Widget */}
                <div className="sidebar-widget category-widget">
                  <div className="widget-title">
                    <h3>Categories</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="category-list-two clearfix">
                      <li><Link href="#">Immigration</Link></li>
                      <li><Link href="#">Application</Link></li>
                      <li><Link href="#">Business Visa</Link></li>
                      <li><Link href="#">Spouse/Family Visas</Link></li>
                      <li><Link href="#">Working Visas</Link></li>
                    </ul>
                  </div>
                </div>

                {/* Popular Post Widget */}
                <div className="sidebar-widget post-widget">
                  <div className="widget-title">
                    <h3>Popular Post</h3>
                  </div>
                  <div className="post-inner">
                    <div className="post">
                      <figure className="post-thumb"><img src="/assets/images/news/news.webp" alt="" /></figure>
                      <h5><Link href="#">Kickstart Your Visa Approval</Link></h5>
                      <span className="post-date">Dec 30, 2020</span>
                    </div>
                    <div className="post">
                      <figure className="post-thumb"><img src="/assets/images/news/news-9.webp" alt="" /></figure>
                      <h5><Link href="#">Priority Visa Applications</Link></h5>
                      <span className="post-date">Dec 25, 2020</span>
                    </div>
                  </div>
                </div>

                {/* Gallery Widget */}
                <div className="sidebar-widget gallery-widget">
                  <div className="widget-title">
                    <h3>Our Gallery</h3>
                  </div>
                  <div className="widget-content p_relative">
                    <ul className="image-list clearfix">
                      {[1, 2, 3, 4, 5, 6].map((i) => (
                        <li key={i}>
                          <figure className="image-box">
                            <Link href={`/assets/images/news/gallery-${i}.jpg`} className="lightbox-image" data-fancybox="gallery">
                              <img src={`/assets/images/news/gallery-${i}.jpg`} alt="" />
                            </Link>
                          </figure>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags Widget */}
                <div className="sidebar-widget tags-widget">
                  <div className="widget-title">
                    <h3>Popular Tags</h3>
                  </div>
                  <div className="widget-content">
                    <ul className="tags-list clearfix">
                      <li><Link href="#"># Agents</Link></li>
                      <li><Link href="#"># Business</Link></li>
                      <li><Link href="#"># Career</Link></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}