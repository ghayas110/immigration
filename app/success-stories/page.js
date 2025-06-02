'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client"; // Adjust path if needed

export default function Home() {
  const [stories, setStories] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "successStory"] | order(_createdAt desc){
      _id,
      clientName,
      country,
      testimonial,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }`).then(setStories)
  }, [])

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Success Stories">
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            {stories.map(story => (
              <div className="col-md-4" key={story._id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={story.imageUrl || "/assets/images/stories/default.jpg"}
                    className="card-img-top"
                    alt={story.imageAlt || story.clientName}
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      {story.clientName} <small className="text-muted">– {story.country}</small>
                    </h5>
                    <p className="card-text text-muted">
                      "{story.testimonial}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}


