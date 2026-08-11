import Section from './Section';
import AboutIllustration from './AboutIllustration';
import SkillsCarousel from './SkillsCarousel';

function About() {
  return (
    <Section id="about">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <h2 className="text-4xl font-bold text-slate-100 whitespace-nowrap">
          <span className="text-cyan-400">/</span> about me
        </h2>
        <div className="flex-1 h-px bg-slate-700" />
      </div>

      {/* Main Content (Text + Illustration) */}
      <div className="flex items-center justify-between gap-12 mb-8">
        <p className="text-lg text-slate-300 max-w-2xl">
          I am a passionate and forward-thinking engineer with a passion for solving complex problems.
          I am driven by a deep fascination with technology's transformative potential, particularly in
          software design, artificial intelligence, and computer vision. I excel at rapidly learning new
          concepts and thrive in dynamic, fast-paced environments where proactive problem-solving and a
          passion for continuous learning are essential.

          <br /><br />

          Currently, I am in my second year of my Bachelor studies of Computer Science and Engineering at Delft 
          University of Technology.          
        </p>

        <div className="hidden md:block shrink-0">
          <AboutIllustration />
        </div>
      </div>

      {/* Skills Carousel Component */}
      <SkillsCarousel />
    </Section>
  );
}

export default About;