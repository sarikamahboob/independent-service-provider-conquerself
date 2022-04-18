import React from "react";
import { Accordion, Carousel } from "react-bootstrap";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="container">
      <h1 className="title">FAQs</h1>
      <div className="faq-section">
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What can a psychologist help with?
            </Accordion.Header>
            <Accordion.Body>
              Psychologists have studied human behavior and the brain (including
              how people think, feel, learn and behave) and have been trained to
              assist people who are having challenges coping with emotions,
              thoughts and actions. This can include those experiencing mental
              health problems such as anxiety and depression, addictive
              behaviors and childhood behavior disorders. Psychologists use
              evidence-based approaches that are tailored to suit each client
              and circumstance and they assess, diagnose and treat a wide range
              of clients and areas of concern.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              What should I expect at my first appointment?
            </Accordion.Header>
            <Accordion.Body>
              It's very normal to feel anxious, nervous, or unsure about your
              first therapy session. Our psychologists and/or social workers
              will provide a private, comfortable, safe, respectful and
              non-judgmental place for you to discuss anything you need to. In
              the first few sessions, the practitioner will typically ask you
              questions about yourself, your life, and any presenting problems
              you would like to work on. Together, you will create a plan of how
              therapy can assist you with these problems, how many sessions it
              may take, and how frequently you should meet. Prior to your first
              session it can be helpful for you to ask yourself what changes you
              would like to make in your life. The aim of therapy is for us to
              then work together to help you achieve those changes.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header>
              My child needs a psychologist – can I come with them?
            </Accordion.Header>
            <Accordion.Body>
              In the first session with your child, your therapist will often
              invite you both into the session at the beginning, then ask to see
              the child by themselves. After this, the therapist will discuss
              with you the most appropriate structure of future counselling
              sessions with your child. In the case of adolescents, depending on
              the age of your teenager they may wish to see their therapist
              without their parent present. However, it is recommended that a
              parent is always available to attend the sessions if needed, and
              parental consent is needed for under 16s to attend therapy.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>How long do I need?</Accordion.Header>
            <Accordion.Body>
              Each individual therapy session is 50 minutes in length. How many
              sessions you need depends on your situation and can be discussed
              with your psychologist. After the first 1-2 sessions, your
              therapist will discuss what they think is an appropriate amount of
              sessions to help you address the presenting problem. This way you
              can set goals and work together on achieving them. Many factors
              can influence the length of therapy including the issues you are
              seeking help with, the coping strategies you already use, your
              support network and previous counselling you may have had.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
