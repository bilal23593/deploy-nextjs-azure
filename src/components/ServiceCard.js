import { useState } from 'react';
import Link from 'next/link';

const ServiceCard = ({ service, index, isSelected, onSelect }) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClass =
    service.color === 'primary'
      ? 'text-primary'
      : 'text-primaryDark';

  return (
    <div
      className="group relative"
      onMouseEnter={() => {
        setIsHovered(true);
        onSelect();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full bg-gray-100 dark:bg-gray-900 rounded-xl p-6 md:p-8 hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-primaryDark/5 dark:hover:from-primary/10 dark:hover:to-primaryDark/10 transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-800 hover:border-primary/50">
        {/* Icon */}
        <div className={`text-5xl mb-4 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
          📦
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-dark dark:text-light mb-2">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
          {service.shortDescription}
        </p>

        {/* Benefits - Shown on hover */}
        <div
          className={`space-y-2 mb-6 overflow-hidden transition-all duration-300 ${
            isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <p className="text-xs font-semibold text-primary mb-2">KEY BENEFITS:</p>
          {service.benefits.slice(0, 3).map((benefit, i) => (
            <div key={i} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
              <span className="text-primary mt-1">✓</span>
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <Link href="/contact" className={`inline-block font-semibold text-sm transition-all duration-300 ${
          isHovered
            ? `text-white bg-gradient-to-r from-primary to-primaryDark px-4 py-2 rounded-full`
            : `${colorClass} hover:opacity-75`
        }`}>
          {isHovered ? 'Get Started' : 'Learn More →'}
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
