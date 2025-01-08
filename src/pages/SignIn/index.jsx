import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

import { Container } from './styles';

import logo from '../../assets/logo.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setLoading] = useState(false);
  const loginButton = useRef(null);

  async function handleSignIn(event) {
    event.preventDefault();
    // Validations
    if (!email || !password)
      return toast.error('Por gentileza, informe e-mail e senha!', { id: 'missingInfo' });

    setLoading(true);
    loginButton.current.disabled = true;
    const toastId = toast.loading('Carregando...');
    await signIn({ email, password });
    setLoading(false);
    loginButton.current.disabled = false;
    toast.dismiss(toastId);
  }

  return (
    <Container>
      <motion.span
        className="logo"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={logo} alt="logo" />
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          food explorer
        </motion.h1>
      </motion.span>

      <motion.div
        className="form-wrapper"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.h2
          className="formTitle"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          Faça login
        </motion.h2>
        <form>
          <motion.label
            htmlFor="email"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            Email
          </motion.label>
          <Input
            id="email"
            type="email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <motion.label
            htmlFor="password"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            Senha
          </motion.label>
          <Input
            id="password"
            type="password"
            placeholder="No mínimo 6 caracteres"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
          >
            <Button
              type="submit"
              ref={loginButton}
              loading={isLoading}
              onClick={handleSignIn}
            >
              Entrar
            </Button>
          </motion.div>
        </form>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <a href="/signup">Criar uma conta</a>
        </motion.p>
      </motion.div>
    </Container>
  );
}
