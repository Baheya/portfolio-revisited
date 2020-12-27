import styled from 'styled-components';
import { CollageOne } from '../Collage/CollageOne';

const HomeGrid = styled.section`
  grid-column: 2 / -2;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: repeat(4, 25vh);
  scroll-snap-align: start;
`;

const HomeText = styled.h1`
  color: var(--color-text-primary);
  margin: 0;
  font-size: 84px;
  max-width: 900px;
  grid-column: 1 / 2;
  grid-row: 2 / 4;
`;

const HomeSection = () => {
  return (
    <HomeGrid>
      <HomeText name="#Home">
        Hi! My name is Baheya Khalifa and I'm <span id="about"></span>
      </HomeText>
      <CollageOne />
    </HomeGrid>
  );
};

export { HomeSection };
