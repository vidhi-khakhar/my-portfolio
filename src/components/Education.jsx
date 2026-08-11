const educationData = [
  {
    dates: "09/2025 - 02/2026",
    title: "ETH Zürich",
    subtitle: "Mobility Student",
    description: "Semester abroad taking courses in Probabilistic AI, Network Security, and more.",
  },
  {
    dates: "2023 - 2026",
    title: "Delft University of Technology",
    subtitle: "BSc Computer Science and Engineering",
    description: "Coursework in algorithms, machine learning, and web development.",
  },
  {
    dates: "Summer 2024",
    title: "Harvard Summer School",
    subtitle: "Your program name here",
    description: "A line or two about what you studied.",
  },
  {
    dates: "2019 - 2023",
    title: "Staszic High School in Lublin",
    subtitle: "International Baccalaureate DP",
    description: "Graduated as valedictorian, notable achievements.",
  },
];

function Education() {
  return (
    <section id="education" className="min-h-screen px-8 py-20">
      <h2 className="text-4xl font-bold mb-16 max-w-4xl mx-auto">Education</h2>
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

        {educationData.map((entry, i) => {
          const isLeft = i % 2 === 0;
          return (
            <div key={entry.title} className="relative flex mb-16">
              <div className={`w-1/2 ${isLeft ? 'pr-12 text-right' : 'ml-auto pl-12 text-left'}`}>
                <p className="text-sm text-gray-400">{entry.dates}</p>
                <h3 className="text-2xl font-semibold text-blue-600">{entry.title}</h3>
                <p className="text-md text-gray-500 mb-2">{entry.subtitle}</p>
                <p className="text-gray-600">{entry.description}</p>
              </div>
              <div className="absolute left-1/2 top-2 w-3 h-3 bg-blue-600 rounded-full -translate-x-1/2" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Education;