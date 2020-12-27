import styled from 'styled-components';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { CollageTwo } from '../Collage/CollageTwo';

const ProjectHeadline = styled.h1`
  color: var(--color-text-primary);
  margin: 0;
  font-size: 96px;
  max-width: 900px;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

const SectionGrid = styled.section`
  grid-column: 2 / -2;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 25vh);
  scroll-snap-align: start;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: repeat(5, 100px);
  grid-column: 1 / -1;
  grid-row: 2 / 5;
`;

const ProjectList = styled.ul`
  list-style: none;
  color: var(--color-text-primary);
  font-weight: 600;
`;

const Project = styled(motion.li)`
  text-align: right;
  position: relative;
  cursor: pointer;
  margin-right: 1rem;
  transform: ${(props) => props.active && `transformX(-20px)`};
`;

const SlashContainer = styled(motion.span)`
  opacity: ${(props) => (props.active ? 0 : 1)};

  transform: translateY(-105%);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  position: relative;
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 300px;
`;

const ImageOverlay = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #fff;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ButtonLink = styled(motion.a)`
  border: 2px solid var(--color-text-primary);
  background: none;
  padding: 0.5rem 0.25rem;
  margin: 0 0.5rem;
  color: var(--color-text-primary);
  &:hover {
    border: 2px solid #fff;
    background-color: var(--color-text-primary);
    color: #fff;
  }
`;

const textMotion = {
  rest: {
    x: 0,
  },
  hover: {
    x: -20,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const slashMotion = {
  rest: {
    opacity: 0,
    ease: 'easeOut',
    duration: 0.2,
    type: 'tween',
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const Projects = () => {
  const projects = [
    {
      name: 'Art Retail Tracking',
      img: 'project-screenshots/art-screenshot.png',
      active: true,
      github: 'https://github.com/Baheya/art-retail-tracking-api',
      website: 'https://art-retail-tracking.herokuapp.com',
    },
    {
      name: 'Designo',
      img: 'project-screenshots/designo-screenshot.png',
      active: false,
      github: 'https://github.com/Baheya/designo',
      website: 'https://designo-project.vercel.app',
    },
    {
      name: 'Herm',
      img: 'project-screenshots/herm-screenshot.png',
      active: false,
      github: 'https://github.com/Baheya/herm',
      website: 'https://herm-app.azurewebsites.net',
    },
    {
      name: 'Reddit Clone',
      img: 'project-screenshots/reddit-clone-screenshot.png',
      active: false,
      github: 'https://github.com/Baheya/reddit-clone',
      website: 'https://blog.baheyakhalifa.com',
    },
    {
      name: 'Smart Brain',
      img: 'project-screenshots/smart-brain-screenshot.png',
      active: false,
      github: 'https://github.com/Baheya/smart-brain',
      website: 'https://smort-brain-faces-detection.herokuapp.com',
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  return (
    <SectionGrid>
      <ProjectHeadline id="Projects">Projects</ProjectHeadline>
      <CollageTwo />
      <ProjectsGrid>
        <ProjectList>
          {projects.map((project, index) => {
            return (
              <Project
                initial="rest"
                whileHover="hover"
                animate={activeProject === index ? 'hover' : 'rest'}
                key={index}
                onClick={() => setActiveProject(index)}
              >
                <motion.h2 variants={textMotion}>
                  {project.name}{' '}
                  <SlashContainer variants={slashMotion}>/</SlashContainer>
                </motion.h2>
              </Project>
            );
          })}
        </ProjectList>
        <ProjectImageContainer>
          <ProjectImage src={projects[activeProject].img} />
          <ImageOverlay whileHover={{ opacity: 0.8 }}>
            <ButtonLink href={projects[activeProject].github} target="__blank">
              Github
            </ButtonLink>
            <ButtonLink href={projects[activeProject].website} target="__blank">
              Live Demo
            </ButtonLink>
          </ImageOverlay>
        </ProjectImageContainer>
      </ProjectsGrid>
    </SectionGrid>
  );
};

export { Projects };
