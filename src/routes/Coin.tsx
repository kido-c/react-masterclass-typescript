import { useParams } from 'react-router';
import styled from 'styled-components';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 320px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

interface RouterState {
  state: { name: string };
}

function Coin() {
  const { coinId } = useParams();
  // /:coinId 파라미터 확인
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;

  console.log(state);
  return (
    <Container>
      <Header>
        <Title>{state?.name || 'Loading...'}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : <div></div>}
    </Container>
  );
}

export default Coin;
