import { Container } from './styles';

import logo from '../../assets/logo-footer.svg';

export function Footer() {
  return (
    <Container>
      <div className="logo-footer">
        <img src={logo} alt="logotipo food-explorer" />
        <span>food explorer</span>
      </div>
      <p className="copyright">&copy; 2025 - Todos os direitos reservados.</p>
    </Container>
  );
}
