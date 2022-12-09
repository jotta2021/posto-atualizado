import { TextField } from '@mui/material'
import { Container } from './login.style'
import { AiFillEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Background from './../../images/background.svg'
export function LoginScreen() {
  return (
    <Container>
      <div className="back">
        <img src={Background} />
      </div>

      <div className="form">
        <h1>Entrar</h1>
        <p>Seja bem vindo!</p>
        <div>
          <form>
            <div className="input-box">
              {' '}
              <input type="text" placeholder="Email" />
            </div>

            <div className="input-box">
              <input type="password" placeholder="Senha" />
            </div>

            <div className="chekbox">
              <label>
                <input type="checkbox" value="senha" />
                Lembrar minha senha
              </label>
              <a>Esqueceu sua senha?</a>
            </div>

            <div className="button-lg">
              <button>Entrar</button>
            </div>

            <div className="button-cad">
              <button>
                <Link to="/register">Criar conta</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}
