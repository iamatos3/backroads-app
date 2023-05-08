import aboutImg from '../images/about.jpeg'
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">
      <Title title='about' spanTitle='us' />

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            We're constantly searching and gathering the best intel to provide our customers that in search of making their wanderlust dreams come true at an affordable cost.
          </p>
          <p>
            Our goals remain to offer the safest travel itineraries to accommodate your personal needs with any destination you select.
          </p>
          <a href="#about" className="btn">read more</a>
        </article>
      </div>
    </section>
  );
};

export default About;
