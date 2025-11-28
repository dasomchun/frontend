import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-[#4ECDC4] p-2 rounded-md"
      >
        {mobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed lg:sticky top-0 left-0 h-screen w-80 bg-[#4ECDC4] overflow-y-auto
        transition-transform duration-300 z-40
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="p-8 lg:p-12">
          {/* Navigation */}
          <nav className="mb-16">
            <ul className="space-y-4 text-white">
              <li><a href="#home" className="hover:opacity-80">HOME</a></li>
              <li><a href="#work" className="hover:opacity-80">WORK</a></li>
              <li><a href="#about" className="hover:opacity-80">ABOUT</a></li>
              <li><a href="#services" className="hover:opacity-80">SERVICES</a></li>
              <li><a href="#contact" className="hover:opacity-80">CONTACT</a></li>
            </ul>
          </nav>

          {/* Hero Text */}
          <div className="mb-20">
            <h1 className="text-white mb-4">
              Paradigm<br />Shift
            </h1>
            <p className="text-white/90 mb-6">
              Creative studio specializing in modern design and visual storytelling
            </p>
            <button className="bg-white text-[#4ECDC4] px-6 py-2 rounded hover:bg-white/90">
              Explore
            </button>
          </div>

          {/* Section 1 */}
          <div className="mb-20">
            <h3 className="text-white mb-4">Making Waves in Design</h3>
            <p className="text-white/90 mb-4">
              We believe in the power of creative thinking and innovative solutions. Our approach combines aesthetic excellence with strategic insight.
            </p>
            <p className="text-white/90">
              Every project is an opportunity to challenge conventions and create something extraordinary.
            </p>
          </div>

          {/* Section 2 */}
          <div className="mb-20">
            <h3 className="text-white mb-4">Innovative Approaches for Modern Brands</h3>
            <p className="text-white/90 mb-6">
              Our multidisciplinary team brings together diverse talents to deliver comprehensive creative solutions.
            </p>
            <ul className="space-y-3 text-white/90">
              <li>• Brand Strategy</li>
              <li>• Visual Identity</li>
              <li>• Digital Experience</li>
              <li>• Content Creation</li>
              <li>• Art Direction</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-20">
            <h3 className="text-white mb-4">Creative Excellence Since 2020</h3>
            <p className="text-white/90 mb-4">
              Founded with a vision to transform how brands communicate, we've grown into a trusted partner for forward-thinking companies.
            </p>
            <p className="text-white/90">
              Our work has been recognized internationally, but what drives us is the impact we create for our clients.
            </p>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-white mb-6">Get in Touch</h3>
            <p className="text-white/90 mb-4">
              Ready to start your next project?<br />
              Let's create something amazing together.
            </p>
            <div className="space-y-2 text-white/90">
              <p>hello@paradigm.studio</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-0">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1622445275992-e7efb32d2257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3aGl0ZSUyMHNoaXJ0fGVufDF8fHx8MTc2NDA0Mjg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Fashion model"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Text Section */}
        <section className="px-8 lg:px-16 py-16 max-w-4xl">
          <h2 className="mb-6">Crafting Visual Stories</h2>
          <p className="text-gray-600 mb-4">
            We are a creative studio dedicated to pushing boundaries and exploring new possibilities in design. 
            Our work spans multiple disciplines, always with a focus on creating meaningful and memorable experiences.
          </p>
          <p className="text-gray-600">
            Through collaboration and innovation, we help brands find their unique voice and connect with their audience 
            in authentic ways.
          </p>
        </section>

        {/* Gallery Grid 1 */}
        <section id="work" className="px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1698070311029-6559fe9bb87c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkb29yfGVufDF8fHx8MTc2NDA0Mjg3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Modern architecture"
              className="w-full h-96 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1584531185216-b5c6114e98a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwd2FsbCUyMG1pbmltYWx8ZW58MXx8fHwxNzY0MDQyODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Pink minimal"
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="px-8 lg:px-16 py-16 bg-gray-50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
            <div>
              <div className="text-gray-400 mb-2">01</div>
              <h4>Projects</h4>
              <p className="text-gray-600">150+</p>
            </div>
            <div>
              <div className="text-gray-400 mb-2">02</div>
              <h4>Clients</h4>
              <p className="text-gray-600">80+</p>
            </div>
            <div>
              <div className="text-gray-400 mb-2">03</div>
              <h4>Awards</h4>
              <p className="text-gray-600">25+</p>
            </div>
            <div>
              <div className="text-gray-400 mb-2">04</div>
              <h4>Team</h4>
              <p className="text-gray-600">20+</p>
            </div>
          </div>
        </section>

        {/* Large Image */}
        <section className="px-8 lg:px-16 py-16">
          <div className="max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1763230302713-88264d392f29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBibHVlJTIwc3VpdGNhc2V8ZW58MXx8fHwxNzY0MDQyODcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Person with suitcase"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Gallery Grid 2 */}
        <section className="px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjQwMjM4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Mountain landscape"
              className="w-full h-72 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1695067439143-81a61a8c904a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQwNDI4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Yellow building"
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Full Width Image */}
        <section className="px-8 lg:px-16 py-16">
          <div className="max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1613241037314-7ca9aaff2b9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwYmx1ZSUyMHdhbGx8ZW58MXx8fHwxNzY0MDQyODcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Bicycle"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Gallery Grid 3 */}
        <section className="px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1618699589738-9e01381b37c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmbGFncyUyMG1pbmltYWx8ZW58MXx8fHwxNzY0MDQyODczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Red flags"
              className="w-full h-72 object-cover rounded-lg"
            />
            <div className="grid grid-rows-2 gap-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1715526244826-fe8006a5b077?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaXJwbGFuZSUyMHNreSUyMHRyYXZlbHxlbnwxfHx8fDE3NjQwNDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Airplane"
                className="w-full h-full object-cover rounded-lg"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1505209487757-5114235191e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjM5NjAyMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Workspace"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Gallery Grid 4 */}
        <section id="services" className="px-8 lg:px-16 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1639372286745-5b7467cfef07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzYW5kJTIwZHVuZXN8ZW58MXx8fHwxNzY0MDA3MzY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Desert dunes"
              className="w-full h-72 object-cover rounded-lg"
            />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1562351768-f68650f3ec54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHN1bnNldHxlbnwxfHx8fDE3NjQwNDA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="City skyline"
              className="w-full h-72 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Full Width Image 2 */}
        <section className="px-8 lg:px-16 py-16">
          <div className="max-w-4xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1586073055204-973f5b079e32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWx8ZW58MXx8fHwxNzY0MDQyODc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="White architecture"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="px-8 lg:px-16 py-16 bg-gray-50">
          <div className="max-w-2xl">
            <h3 className="mb-4">Stay Updated</h3>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for insights, inspiration, and updates on our latest work.
            </p>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#4ECDC4]"
              />
              <button className="bg-[#4ECDC4] text-white px-8 py-3 rounded hover:bg-[#3db3aa]">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="px-8 lg:px-16 py-20">
          <div className="max-w-2xl">
            <h2 className="mb-8">Let's Create Together</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#4ECDC4]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#4ECDC4]"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#4ECDC4]">
                  <option>Brand Identity</option>
                  <option>Web Design</option>
                  <option>Digital Strategy</option>
                  <option>Content Creation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-[#4ECDC4]"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#4ECDC4] text-white px-8 py-3 rounded hover:bg-[#3db3aa]"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer id="about" className="px-8 lg:px-16 py-12 bg-gray-900 text-white">
          <div className="max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="mb-4">Paradigm Shift</h4>
                <p className="text-gray-400">
                  Creative studio based in New York, working with clients worldwide.
                </p>
              </div>
              <div>
                <h5 className="mb-4">Quick Links</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#work" className="hover:text-white">Work</a></li>
                  <li><a href="#services" className="hover:text-white">Services</a></li>
                  <li><a href="#about" className="hover:text-white">About</a></li>
                  <li><a href="#contact" className="hover:text-white">Contact</a></li>
                </ul>
              </div>
              <div>
                <h5 className="mb-4">Connect</h5>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Instagram</a></li>
                  <li><a href="#" className="hover:text-white">Twitter</a></li>
                  <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                  <li><a href="#" className="hover:text-white">Behance</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>© 2025 Paradigm Shift. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
