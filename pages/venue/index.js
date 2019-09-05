import { useState } from 'react';
import styled from 'styled-components';
import ConferenceContent from './Conference';
import WorkshopContent from './Workshop';

const CONFERENCE = 'CONFERENCE';
const WORKSHOP = 'WORKSHOP';

export default function Venue() {
  const [ activeTarget, setActiveTarget ] = useState(CONFERENCE);

  function updateActiveTarget(target) {
    setActiveTarget(target);
  }

  function switchContent(target) {
    switch(target) {
    case CONFERENCE:
      return <ConferenceContent />;
    case WORKSHOP:
      return <WorkshopContent />;
    default:
      return <ConferenceContent />;
    }
  }

  return (
    <Container>
      <SegmentButton>
        <Button
          onClick={() => updateActiveTarget(CONFERENCE)}
          active={activeTarget === CONFERENCE}
        >
          主年會
        </Button>
        <Button
          onClick={() => updateActiveTarget(WORKSHOP)}
          active={activeTarget === WORKSHOP}
        >
          工作坊
        </Button>
      </SegmentButton>
      {switchContent(activeTarget)}
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 70px 0px;
  min-height: 90vh;
  margin: 0px 15px;
`;

const SegmentButton = styled.div`
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 24px;
`;

const Button = styled.button`
  background-color: ${props => props.active ? '#ffc800' : '#eaeaea'};
  font-size: 24px;
  padding: 10px 35px;
  font-weight: bold;
  width: 50%;
  color: black;
  border: 0px solid;
  &:hover {
    background-color: ${props => props.active ? '#ffc800' : '#ffdd60'};
  }
  &:focus {
    outline:0;
  }
`;