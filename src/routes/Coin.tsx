import { useParams } from 'react-router';

function Coin() {
  const { coinId } = useParams();
  // /:coinId 파라미터 확인
  return <h1>Coin: {coinId}</h1>;
}

export default Coin;
