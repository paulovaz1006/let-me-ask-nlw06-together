import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import '../styles/auth.scss';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

export function NewRoom() {
  const { user } = useAuth();

  return( 
    <div id="page-auth">
    <aside>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
      <strong>Crie sala de Q&amp;A ao vivo</strong>
      <p>Tire suas dúvidas da sua audiencia em tempo real</p>
    </aside>
    <main>
      <div className="main-content">
        <img src={logoImg} alt="let Me Ask" />
        <h2>
          Criar uma nova Sala
        </h2>
        <div className="separator">ou entre em uma sala</div>
        <form>
          <input 
            type="text"
            placeholder="Nome da sala"
          />
          <Button type="submit">
            Criar sala
          </Button>
        </form>
        <p>Quer entrar em uma sala existente <Link to="/">clique aqui</Link></p>
      </div>
    </main>
  </div>
  )
}