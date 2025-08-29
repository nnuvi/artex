const features = [
  { title: "Browse Exhibitions", desc: "Find current and upcoming art events." },
  { title: "Instant Booking", desc: "Reserve a hall or ticket with ease." },
  { title: "Personalized Suggestions", desc: "Get events based on your interests." },
];

const FeaturesSection = () => (
  <section className="py-16 bg-gray-50 text-center">
    <h3 className="text-3xl font-bold mb-10">Why Use ArtGallery?</h3>
    <div className="flex justify-center gap-10 flex-wrap">
      {features.map((f, idx) => (
        <div key={idx} className="max-w-sm p-6 bg-white shadow-md rounded-lg">
          <h4 className="text-xl font-semibold mb-2">{f.title}</h4>
          <p className="text-gray-600">{f.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturesSection;
