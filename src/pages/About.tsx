import { Team } from '../sections';

const About = () => {
  return (
    <div className="body">
      <div className="content">
        <section style={{marginTop:'5ex'}}>
          <h2>What is Smidgen?</h2>
          <p>
            Smidgen aims to simplify and automate common tasks that logisticians
            conduct on a daily basis so they can focus on the effective
            distribution of materiel, as well as maintain an accurate record
            keeping book of receiving, issuance, audits, surpluses, amongst
            other logistical tasks.
          </p>
          <p>
            Our goal is to create a logistics management solution that allows
            for granular control over the data input as well as notifications to
            a variety of mediums
          </p>
        </section>

        <section>
          <h2>Our Values</h2>
          <p>Smidgen operates on the following basic values:</p>
          <ul>
            <li>We don't manage your data, nor do we have any rights to it,</li>
            <li>Ease of use is at the forefront of our application,</li>
            <li>Transparency, empathy and respect are core values.</li>
          </ul>
        </section>

        <section>
          <Team />
        </section>
      </div>
    </div>
  );
};

export { About };
