import React from "react";
import "./About.css";
import about from "../../Images/about.jpg";

const About = () => {
  return (
    <div>
      <h1 className="title">About Me</h1>
      <div className="container about">
        <div className="about-section">
          <p className="about-me">
            Assalamualaikum. My name is Sarika Mahboob. My born and brought up
            is in Dhaka. I completed my school and college as a Science student
            in Greenfield College which is situated in Mirpur. and I completed
            my graduation in CSE from Green University of Bangladesh in 2021.
            After entering into varsity as a CSE student my career goal was
            become a web developer. Since I know about these web developing
            site, I feel very interested to know more about this world of web
            developing.From that time till now, I want to see myself as a good
            full stack web developer. When I know about the programming hero
            course, I enrolled myself in batch 5 and now I can say myself
            actually after completing the course, a junior web developer.
          </p>
          <p className="about-me">
            Before entering into the course, I knew little about the things of
            web development. But now, when I am in the middle of the course I
            actually know about the huge opportunities in web developing career.
            Before entering into the course I have no dream or not any interest
            to do Job in Google or in Facebook. But now I actually want to see
            myself as a Google or a Facebook web developer after 10 or 15 years.
            It will be my ultimate goal. I don't know whether I can fulfill my
            this dream or not, but I will do hard work and hard work and hard
            work (as per my ideal Jhankar Mahbub Sir said) to achieve that. keep
            me in your prayers. Thank You.
          </p>
        </div>
        <div className="about-img">
          <img src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
