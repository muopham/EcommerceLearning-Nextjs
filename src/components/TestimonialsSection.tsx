import StarRating from "@/components/StarRating";

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "The quality of the products exceeds my expectations. Fast shipping and excellent customer service!",
    rating: 5,
    role: "Loyal Customer",
  },
  {
    name: "Michael Chen",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "I love how easy it is to navigate the website and find exactly what I'm looking for. Great selection of products!",
    rating: 5,
    role: "New Customer",
  },
  {
    name: "Emily Rodriguez",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "The checkout process was smooth and hassle-free. My items arrived earlier than expected and in perfect condition.",
    rating: 4.5,
    role: "Repeat Customer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex text-yellow-400 mb-4">
                <StarRating rating={t.rating} size="lg" />
              </div>
              <p className="text-gray-600 mb-4">&quot;{t.quote}&quot;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div>
                  <h4 className="font-medium">{t.name}</h4>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
