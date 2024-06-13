import { TextInput, TextInputCategory } from '../components';

function Contact() {
  return (
    <div className="body" id="home">
      <div className="content">
        <section>
          <div className="contact-header">
            <h1 style={{ paddingBottom: '3ex' }}>
              Have Questions or Comments?
            </h1>
            <h4>Drop us a message!</h4>
          </div>
          <form className="contact-form">
            <div className="user-contact">
              <TextInput
                className="user-name"
                inputType={TextInputCategory.text}
                type="info"
                placeholder="John Doe"
                label="Name"
                supportiveText="We prefer to know your name so we know what to call you!"
              />
              <TextInput
                className="user-email"
                inputType={TextInputCategory.text}
                type="info"
                placeholder="jdoe@example.com"
                label="Email"
                supportiveText="This is how we can get in contact with you."
              />
            </div>
            <TextInput
              className="user-comments"
              textArea
              inputType={TextInputCategory.text}
              type="info"
              label="Comments"
            />
            <button className="button-tertiary contact-submit">Submit</button>
          </form>
        </section>
      </div>
    </div>
  );
}

export { Contact };
