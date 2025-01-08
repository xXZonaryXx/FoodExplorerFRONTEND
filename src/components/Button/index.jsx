import { forwardRef } from 'react';
import { Container } from './styles';

export const Button = forwardRef(({ loading = false, children, ...rest }, ref) => {
  return (
    <Container {...rest} ref={ref} >
      {children}
    </Container>
  );
});
