
import { 
  MapPin, 
  Settings, 
  FileText, 
  Link as LinkIcon, 
  ShoppingCart, 
  BarChart,
  ArrowRight,
  TrendingUp,
  Search,
  Globe,
  Car,
  Video
} from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';
import { getAllServices } from '@/lib/servicesData';

const iconMap: Record<string, React.ReactNode> = {
  'map-pin': <MapPin className="h-8 w-8 text-seo-blue" />,
  'settings': <Settings className="h-8 w-8 text-seo-blue" />,
  'file-text': <FileText className="h-8 w-8 text-seo-blue" />,
  'link': <LinkIcon className="h-8 w-8 text-seo-blue" />,
  'shopping-cart': <ShoppingCart className="h-8 w-8 text-seo-blue" />,
  'bar-chart': <BarChart className="h-8 w-8 text-seo-blue" />,
  'trending-up': <TrendingUp className="h-8 w-8 text-seo-blue" />,
  'search': <Search className="h-8 w-8 text-seo-blue" />,
  'globe': <Globe className="h-8 w-8 text-seo-blue" />,
  'car': <Car className="h-8 w-8 text-seo-blue" />,
  'video': <Video className="h-8 w-8 text-seo-blue" />
};

interface ServicesProps {
  location?: string;
  locationSlug?: string;
}

const Services = ({ location, locationSlug }: ServicesProps) => {
  // Get services from servicesData instead of using the data.ts services
  const services = getAllServices();
  
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection 
          className="text-center mb-16 max-w-3xl mx-auto"
          animation="fade-in"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-seo-blue/10 text-seo-blue mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-seo-dark mb-4">
            {location 
              ? `SEO Services in ${location}`
              : 'Comprehensive SEO Solutions'}
          </h2>
          <p className="text-lg text-seo-gray-dark">
            {location 
              ? `We help businesses in ${location} improve their search visibility and drive more qualified traffic.`
              : 'Tailored strategies to improve your online visibility and drive sustainable growth'}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection 
              key={service.id}
              className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              animation="fade-in"
              delay={100 * index}
            >
              <div className="bg-seo-blue/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-display font-bold text-seo-dark mb-3">
                {service.title}
              </h3>
              <p className="text-seo-gray-dark mb-6">
                {service.description}
              </p>
              
              {/* Service Feature Image - Now using the image directly from service data */}
              <div className="mb-6 rounded-lg overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              
              {/* Removed the features list rendering since Service type doesn't have features property */}
              
              <Link 
                to={locationSlug 
                  ? `/location/${locationSlug}/${service.slug}` 
                  : `/service/${service.slug}`} 
                className="inline-flex items-center text-seo-blue font-medium group mt-2"
              >
                <span className="border-b border-seo-blue/30 group-hover:border-seo-blue transition-colors">
                  {locationSlug ? `${service.title} in ${location}` : 'Learn more'}
                </span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-seo-blue/5 rounded-full"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-seo-blue/5 rounded-full"></div>
    </section>
  );
};

export default Services;
