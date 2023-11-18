import { Container } from "@chakra-ui/react";
import ReferenceSearch from "../components/ReferenceSearch";

type Props = {};

const Dictionary = (props: Props) => {
  return (
    <Container px="0" maxW="100%" w="100%">
      <ReferenceSearch />
    </Container>
  );
};

export default Dictionary;
