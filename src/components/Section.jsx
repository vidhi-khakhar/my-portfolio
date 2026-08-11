function Section({ id, children }) {
  return (
    <section id={id} className="min-h-screen flex items-center px-8 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
}

export default Section;