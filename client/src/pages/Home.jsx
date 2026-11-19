import React from 'react'
import Hero from '../components/Hero'
import {
  Recognition,
  CompanyStatistics,
  WhyChooseUs,
  ProjectCta,
} from '../components/AddedSections'

export default function Home() {
  return (
    <main className="site-main home-page">
      <Hero />
      <Recognition />
      <CompanyStatistics />
      <WhyChooseUs />
      <ProjectCta home />
    </main>
  )
}
