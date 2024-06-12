import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionItem,
  ButtonGroup,
  ButtonGroupItem,
} from '../components';

function FAQ() {
  return (
    <div className="body" id="home">
      <div className="content">
        <section>
          <h1 style={{ paddingBottom: '3ex' }}>Frequently Asked Questions</h1>
          <Accordion>
            <AccordionItem title="What is Smidgen?">
              <p>
                Smidgen aims to simplify and automate common tasks that
                logisticians conduct on a daily basis so they can focus on the
                effective distribution of materiel, as well as maintain an
                accurate record keeping book of receiving, issuance, audits,
                surpluses, amongst other logistical tasks.
              </p>
              <p>
                Our goal is to create a logistics management solution that
                allows for granular control over the data input as well as
                notifications to a variety of mediums
              </p>
            </AccordionItem>
            <AccordionItem title="Who is developing Smidgen?">
              <p>
                Smidgen is being developed by just three people, those are the
                people you see in our <Link to="/about">about</Link> page!
              </p>
              <p>
                Although the team is small, they are a powerhouse with a diverse
                background with emphasis on developing new technologies that
                aide different populations in simplifying their lifes.
              </p>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}

export { FAQ };
