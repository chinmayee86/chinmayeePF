// experience.js
import React from 'react';
import './experience.css'; // Add your custom styles here if needed
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = () => {

const WorkIcon = () => <></>;

  return (
    <div id="experience" className="experience-section">
      <h1 className="section-title">My Experience</h1>
      <VerticalTimeline>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug, 2024 - Present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lake Forest, CA
          </h4>
          <p>
          As a Software Developer, I created scalable web applications using Java 8, Spring Boot, and Hibernate, and built RESTful APIs integrated with React.js for engaging user interfaces. I led an e-commerce management system project, enabling real-time inventory and seamless payment processing. By implementing lazy loading in React and optimizing PostgreSQL databases, I improved performance, and automated CI/CD with Jenkins and Docker to accelerate deployments by 30%.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Aug, 2021 - Jan, 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Digital Specialist Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Hyderabad, India
          </h4>
          <p>As a Full Stack Developer, I launched interactive landing pages and dashboards with Angular, Node.js, and TypeScript, boosting user engagement and retention. I designed RESTful APIs using Java 8 and Spring Boot to enhance performance and led the development of a customer feedback system with real-time dashboards, improving decision-making. I integrated MySQL for efficient data storage and optimized AWS deployments on EC2 and S3 for scalability. Utilizing Git for version control, I ensured smooth collaboration, while Docker and Jenkins streamlined CI/CD, reducing deployment times and enhancing release reliability.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date=" Jul 2019 - Jul 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            India
          </h4>
          <p>In the LENDING MASTER project, I developed a loan tracking system for microfinance firms using Java, Spring Boot, and MySQL, enhancing system efficiency and loan processing accuracy. I built scalable backend services, designed frontend components with Angular and React for improved UX, and automated database tasks with PL/SQL. Working in an Agile environment, I used JIRA for project management and streamlined build and deployment with Maven and Jenkins, reducing delivery time and errors in production.</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
    
  );
};

