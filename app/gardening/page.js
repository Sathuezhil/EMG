import ServicePage from '@/components/ServicePage'

export const metadata = {
  title: 'Gardening Services',
  description: 'Landscape design, lawn care, irrigation, and garden maintenance across the UAE from EMG Facility Management.'
}

export default function GardeningPage() {
  return (
    <ServicePage
      crumb="Services / Gardening"
      title="Gardening services"
      image="/images/landscape.jpg"
      kicker="Landscape"
      heading="Outdoor spaces that stay green in a desert climate."
      paragraphs={[
        'At EMG Facility Management, a well-maintained landscape reflects the quality and care of an organization. Our gardening services create and sustain beautiful, healthy outdoor spaces that lift the appeal of a property.',
        'The team handles landscaping and maintenance for residential, commercial, and corporate sites. From routine lawn care to garden design and installation, every plant, tree, and flowerbed is looked after. Design is paired with practices that last in the UAE climate.',
        'With horticulture experience and the right equipment, outdoor spaces stay lush, clean, and inviting through the year — shaped to the property, how it is used, and the budget.'
      ]}
      sideImage="/images/garden.jpg"
      sideAlt="Hands tending a garden"
      listKicker="Gardening solutions"
      listHeading="From the first planting to the weekly upkeep."
      items={[
        'Landscape design and installation',
        'Lawn mowing and maintenance',
        'Tree and shrub pruning',
        'Irrigation system setup and maintenance',
        'Seasonal planting and flowerbed design',
        'Fertilization and pest control',
        'Garden cleaning and waste removal'
      ]}
      ctaTitle="A green edge for the property."
      ctaText="Tell us the site and we’ll propose a landscape plan that can actually be maintained."
      ctaHref="/contact?service=Gardening%20Services"
      ctaLabel="Request gardening"
    />
  )
}
