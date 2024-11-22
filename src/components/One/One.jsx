import React from 'react';
import styled from 'styled-components';
import ProtoType from 'prop-types';

const Container = styled.div`
  box-shadow: rgb(0 0 0 / 20%) 0px 0.0625rem 0.1875rem 0px;
  border-radius: 0.1875rem;
  background-color: var(--ck-backgroundPrimaryLow);
  height: 640px;
  width: 600px;
`;

const One = () => {
  return (
    <Container>
      Component One
    </Container>
  );
};

One.propTypes = {
  PropertyInfo: ProtoType.object,
};

export default One;