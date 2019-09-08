import styled from 'styled-components';
import ConferenceContent from './Conference';
import WorkshopContent from './Workshop';
import SegmentPages, { useSegment } from '~/components/SegmentPages';
import { ACTIVITIES } from '~/constant';

const { CONFERENCE, WORKSHOP } = ACTIVITIES;

export default function Venue() {
  const segmentHook = useSegment();
  const subPages = {
    [CONFERENCE.key]: ConferenceContent,
    [WORKSHOP.key]: WorkshopContent,
  };
  return (
    <Container>
      <SegmentPages subPages={subPages} {...segmentHook}/>
    </Container>
  );
}

const Container = styled.div`
  flex: 1;
  padding: 70px 0px;
  min-height: 90vh;
  margin: 0px 15px;
`;
