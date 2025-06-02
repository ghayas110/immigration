'use client'
import Link from "next/link";
import Layout from "@/components/layout/Layout"
import { useEffect, useState } from 'react'
import { client } from "@/sanity/lib/client";

export default function ConsultancyCertificationPage() {
  const [certifications, setCertifications] = useState([])

  useEffect(() => {
    client.fetch(`*[_type == "certification"] | order(issuedDate desc){
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt
    }`).then(setCertifications)
  }, [])

  return (
    <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Certifications">
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Our Certifications</h2>
            <p className="text-muted">Explore the certifications we offer to validate your business or professional credibility.</p>
          </div>
          <div className="row g-4">
            {certifications.map(cert => (
              <div className="col-md-4" key={cert._id}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={cert.imageUrl || "/assets/images/certificates/default.png"}
                    className="card-img-top p-4"
                    alt={cert.imageAlt || cert.title}
                    style={{ height: '250px', objectFit: 'contain' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{cert.title}</h5>
                    <p className="card-text text-muted">{cert.description}</p>
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
