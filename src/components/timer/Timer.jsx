import styled from "styled-components";
import CircularProgress from "./circularProgress/CircularProgress";

const Timer = () => {
  return (
    <TimerContainer>
        <CircularProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
    background: conic-gradient(
        ${(props) => props.theme.colors.secondary},
        ${(props) => props.theme.colors.bg} 150deg,
        ${(props) => props.theme.colors.secondary},
    );
    width: 45rem;
    height: 45rem;
    margin: 2rem auto;
    border-radius: 50%;
    display: grid;
    place-items: center;
    box-shadow: -50px -50px 150px rgba(158, 158, 158, 0.2),
    50px -10px 100px rgba(0, 0, 0, 0.5);
`;





