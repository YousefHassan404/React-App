import React from "react";
import "./CatCources.scss";

const CatCources = () => {
  const topics = [
    {
      name: "AWS Certified Cloud Practitioner",
      url: "https://www.udemy.com/topic/aws-certified-cloud-practitioner/",
    },
    {
      name: "Ethical Hacking",
      url: "https://www.udemy.com/topic/ethical-hacking/",
    },
    { name: "Amazon AWS", url: "https://www.udemy.com/topic/amazon-aws/" },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      url: "https://www.udemy.com/topic/cisco-ccna/",
    },
    {
      name: "AWS Certified Solutions Architect - Associate",
      url: "https://www.udemy.com/topic/aws-certified-solutions-architect-associate/",
    },
    {
      name: "CompTIA Security+",
      url: "https://www.udemy.com/topic/comptia-security/",
    },
    { name: "CompTIA A+", url: "https://www.udemy.com/topic/comptia-a/" },
    {
      name: "Cybersecurity",
      url: "https://www.udemy.com/topic/cyber-security/",
    },
  ];

  return (
    <div className="cat-container">
      <h1 className="ud-heading">IT & Software Courses</h1>
      <h2>Courses to get you started </h2>
      <p>Explore courses from experienced, real-world experts.</p>

      <div className="cat-courses-container">
        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/ccna-on-demand-video-boot-camp/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c1.png" alt="CCNA course" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/ccnpallinone/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c2.png" alt="ccnpa course" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/introduction-to-fiber-optic-cabling/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c3.png" alt="intro to fiber optic capling course" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/the-theory-behind-electronics-a-beginners-guide/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c4.png" alt="the-theory-behind-electronics course" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/information-technology-essentials/?couponCode=JUST4U02223"
            target="blank"
          >
            <img
              src="C/c5.png"
              alt="information-technology-essentials course"
            />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/unix-for-beginners/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c6.png" alt="unix-for-beginners course" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/plc-programming-from-scratch/?couponCode=JUST4U02223"
            target="blank"
          >
            <img src="C/c7.png" alt="plc-programming-from-scratch source" />
          </a>
        </div>

        <div className="course-cat">
          <a
            href="https://www.udemy.com/course/sql-server-fast-track-intro-to-queries/?couponCode=JUST4U02223"
            target="blank"
          >
            <img
              src="C/c8.png"
              alt="sql-server-fast-track-intro-to-queries source"
            />
          </a>
        </div>
      </div>

      <div className="popular-topics-container">
        <h2>Popular topics</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <a
              key={index}
              href={topic.url}
              target="_blank"
              rel="noopener noreferrer"
              className="topic-item"
            >
              {topic.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatCources;
