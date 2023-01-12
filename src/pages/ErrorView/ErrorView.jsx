import { Container, Image, ErrorMessage } from './ErrorView.styled';
import ErrorImage from '../../images/nothing.png';

export default function ErrorView() {
  return (
    <Container>
      <Image src={ErrorImage} alt="Error" width="250" />
      <ErrorMessage>
        Sorry, can't find page :(
        <br />
        Please, try again.
      </ErrorMessage>
    </Container>
  );
}