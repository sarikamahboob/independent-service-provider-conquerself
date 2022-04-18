import React from "react";
import { Accordion } from "react-bootstrap";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="container">
      <div className="blog-container">
        <div className="blog-div">
          <h1 className="blog-title">
            <span>Question-1:</span> Difference between authorization and
            authentication?
          </h1>
          <p>
            <span>Answer:</span>
            In terms of knowledge security, both authentication and
            authorization are used to ensure the safety of an automated data
            system. As part of its service infrastructure, each area unit
            terribly important issues usually associated to the internet.
            However, each term has a completely different meaning and connotes a
            completely different concept.
            <li>
              The identity of users is validated during the authentication
              process before they are granted access to the system. However, in
              the authorization process, a person's or user's authority to
              access resources is checked.
            </li>
            <li>
              Users or individuals are validated during the authentication
              procedure.However, users or individuals are validated during the
              authorization procedure.
            </li>
            <li>
              Authentication usually necessitates the user's login credentials.
              However, authorization is dependent on the user's privileges or
              security levels.
            </li>
            <li>
              Prior to the authorization process, authentication must be
              completed. However, authorization occurs after the authentication
              procedure has been completed.
            </li>
            <li>
              Authentication decides whether or not someone is a user. However,
              authorization decides what kind of permission a user has.
            </li>
          </p>
        </div>
        <div className="blog-div">
          <h1 className="blog-title">
            <span>Question-2:</span> Why are you using firebase? What other
            options do you have to implement authentication?
          </h1>
          <p>
            <span>Answer: </span>
            In the case of a Google Firebase, which began as a chat API in 2011
            and was bought by Google in 2014, is a platform that today provides
            active backend as a service (BaaS) for developing dynamic online and
            mobile apps. The Firebase concept is straightforward. When we create
            a client-side project with JavaScript or one of its frameworks,
            Google Firebase may quickly transform it into a serverless app. It
            also eliminates the need for us to handle databases because it takes
            care of it for us. As a result, integrating Firebase entails
            incorporating a ready-made backend into our client code in order to
            make it dynamic. Finally, it eliminates the need to build new
            backend code and instead provides us with a fully functional one.
            That's why, we should use Firebase. Other options to implement
            authentication are:
            <li>Parse</li>
            <li>AWS Amplify</li>
            <li>Backendless</li>
            <li>Kuzzle</li>
            <li>Supabase</li>
            <li>appwrite</li>
            <li>Hasura</li>
            <li>NHost</li>
            <li>Deployd</li>
            <li>Auth0</li>
            <li>JSON Web Token</li>
          </p>
        </div>
        <div className="blog-div">
          <h1 className="blog-title">
            <span>Question-3:</span> What other services does firebase provide
            other than authentication
          </h1>
          <p>
            <span>Answer:</span>
            Other services without authentication firebase provides are:
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
            Firebase is a complete package that may help you construct mobile or
            web applications faster and more efficiently with fewer resources.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
