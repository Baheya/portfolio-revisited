import styled from 'styled-components';
import { CollageTwo } from '../Collage/CollageTwo';

const ProjectHeadline = styled.h1`
  color: var(--color-text-primary);
  margin: 0;
  font-size: 96px;
  max-width: 900px;
  grid-column: 4 / 5;
  grid-row: 1 / 2;
`;

const ProjectsGrid = styled.section`
  grid-column: 2 / -2;
  grid-row: 3 / 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 25vh);
`;

const Projects = () => {
  return (
    <ProjectsGrid>
      <ProjectHeadline id="Projects">Projects</ProjectHeadline>
      <CollageTwo />
    </ProjectsGrid>
  );
};

export { Projects };
