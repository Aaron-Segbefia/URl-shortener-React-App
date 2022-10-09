import brandRec from "../../images/icon-brand-recognition.svg";
import detailedRecords from "../../images/icon-detailed-records.svg";
import fullyCustom from "../../images/icon-fully-customizable.svg";
import statsCSS from "./statsCSS.css";

const Stats = () => {
  return (
    <section className={statsCSS.stats}>
      <div className="container">
        <h2 className="center">Advanced Statistics</h2>
        <p className={`center ${statsCSS.stat__desc}`}>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
        <div className={`row ${statsCSS.stats__boxes}`}>
          <hr className={statsCSS.stats__box__line} />
          <article className={statsCSS.stats__box}>
            <div className={statsCSS.stats__box__logo}>
              <img src={brandRec} alt="Brand recognition" aria-hidden="true" />
            </div>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </article>

          <article className={statsCSS.stats__box}>
            <div className={statsCSS.stats__box__logo}>
              <img
                src={detailedRecords}
                alt="detailed records"
                aria-hidden="true"
              />
            </div>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </article>

          <article className={statsCSS.stats__box}>
            <div className={statsCSS.stats__box__logo}>
              <img
                src={fullyCustom}
                alt="fully customizable"
                aria-hidden="true"
              />
            </div>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Stats;
