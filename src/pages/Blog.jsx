import Hero from '../components/Hero.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CTASection from '../components/CTASection.jsx';
import { blogPosts } from '../data/siteData.js';
import { siteAssets } from '../assets/siteAssets.js';

export default function Blog() {
  return (
    <>
      <Hero compact eyebrow="Blogs" title="Accounting & Tax Tips" subtitle="Helpful updates for individuals, investors and Melbourne business owners." image={siteAssets.audit} primaryTo="/contact" />
      <section className="section bg-white">
        <div className="container-page">
          <SectionHeader eyebrow="Latest Articles" title="Practical accounting guidance" />
          <div className="grid gap-6 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="overflow-hidden rounded-md border border-slate-200 bg-white shadow-soft">
                <img src={post.image} alt="" className="h-52 w-full object-cover" loading="lazy" />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-navy">{post.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
