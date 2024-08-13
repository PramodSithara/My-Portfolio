import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import projImg1 from "../assets/img/projects/car.png";
import projImg2 from "../assets/img/projects/uov.png";
import projImg3 from "../assets/img/projects/weather.png";
import projImg4 from "../assets/img/projects/chatroom.png";
import projImg5 from "../assets/img/projects/chatbot.png";
import projImg6 from "../assets/img/projects/music.png";
import projImg7 from "../assets/img/projects/fileshare.png";
import projImg8 from "../assets/img/projects/compiler.png";
import pythonImg from "../assets/img/projects/python.png"
import uFix from "../assets/img/projects/ufix.png"

import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Car Booking System",
      description: "Online Car Booking System Without Driver (With Admin Panel)",
      imgUrl: projImg1,
    },
    {
      title: "UOV BusBooking System",
      description: "University of Vavuniya Bus Booking System (With Admin Panel)",
      imgUrl: projImg2,
    },
    {
      title: "Weather-App",
      description: "Find Weather Anywhere",
      imgUrl: projImg3,
    },
    {
      title: "ChatRoom - Django",
      description: "Django Chat Room Can Message Multiple Users together",
      imgUrl: projImg4,
    },
    {
      title: "ChatBot - Flask",
      description: "This ChatBot Responds in Sinhala Language according to the English question",
      imgUrl: projImg5,
    },
    {
      title: "Music Player",
      description: "Music Player Can Play Songs saved in the database",
      imgUrl: projImg6,
    },
    {
      title: "Online FileShare WebApp",
      description: "Share Any File Between Devices",
      imgUrl: projImg7,
    },
    {
      title: "Online Code Compiler",
      description: "Online Code Compiler for C, Python, and Java",
      imgUrl: projImg8,
    },
    {
      title: "Python URL Shortner",
      description: "Short URL Using Python",
      imgUrl: pythonImg,
    },
    {
      title: "Python Keylogger",
      description: "Ethical Hacking - Python Keylogger (Keylogger update Receiver Through email about user's Key Event)",
      imgUrl: pythonImg,
    },
    {
      title: "Python AI Assistant",
      description: "Personal AI Assistant",
      imgUrl: pythonImg,
    },
    {
      title: "Python PDF to Audio Converter",
      description: "Make Audio-Book using PDF file",
      imgUrl: pythonImg,
    },
    {
      title: "Python Geolocation Distance Finder",
      description: "Find Distance Between Two Geolocation places",
      imgUrl: pythonImg,
    },
    {
      title: "Python Virtual Mouse",
      description: "Virtual Mouse Can Control Using EYE",
      imgUrl: pythonImg,
    },
    {
      title: "Python File Organizer",
      description: "Organize File According Extensions",
      imgUrl: pythonImg,
    },
    {
      title: "Hardware Management System",
      description: "C# Hardware Management System",
      imgUrl: pythonImg,
    },
    {
      title: "U-Fix Web Application",
      description: "Fix All Vehicle By Your Self. Identify Faults , Search Fault Using Fault Identification and Easily Find Solution",
      imgUrl: uFix,
    },
    {
      title: "Parking Space Recognition",
      description: "Identify Available Parking Spots using Python cvzone",
      imgUrl: pythonImg,
    },
    
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="text-center">Projects</h2>
                  <p className="text-center">
                    Explore a curated collection of my best projects and work
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.slice(0, 6).map((project, index) => (
                            <Col key={index} xs={12} md={4}>
                              <ProjectCard {...project} />
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.slice(6, 12).map((project, index) => (
                            <Col key={index} xs={12} md={4}>
                              <div className="project-card-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                      <Row>
                          {projects.slice(12, 18).map((project, index) => (
                            <Col key={index} xs={12} md={4}>
                              <div className="project-card-container">
                                <ProjectCard {...project} />
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
