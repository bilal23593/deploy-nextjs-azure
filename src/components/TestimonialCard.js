import Image from 'next/image';

const TestimonialCard = ({ testimonial, showCompany = true }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-6 md:p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-800 h-full">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-lg text-primary">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
        "{testimonial.text}"
      </p>

      {/* Divider */}
      <div className="w-12 h-1 bg-gradient-to-r from-primary to-primaryDark mb-6" />

      {/* Author Info */}
      <div className="flex items-center gap-4">
        {testimonial.avatar && (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.author}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        )}
        <div className="flex-1">
          <p className="font-bold text-dark dark:text-light">{testimonial.author}</p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {testimonial.role}
            {showCompany && testimonial.company && (
              <>
                <br />
                <span className="text-xs">{testimonial.company}</span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Service Tag (optional) */}
      {testimonial.service && (
        <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-700">
          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
            {testimonial.service}
          </span>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;
