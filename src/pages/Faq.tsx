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
            <AccordionItem title="my first item!">
              <p>Hello!</p>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </div>
  );
}

export { FAQ };
