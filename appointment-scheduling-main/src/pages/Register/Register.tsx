import { Container } from '../Register/register.styles'
import { Link } from 'react-router-dom'
import { CustomTable } from '../../components/CustomTable/CustomTable'
import Background from './../../images/background.svg'
export function RegisterScreen() {
  return (
    /*
    <div>
      <h1>Register</h1>
      <CustomTable
        columns={[
          { field: 'id', headerName: 'ID', width: 70, type: 'number' },
          { field: 'firstName', headerName: 'First name', width: 130 },
          { field: 'lastName', headerName: 'Last name', width: 130 },
        ]}
        data={[
          { id: 1, lastName: 'Snow', firstName: 'Jon' },
          { id: 2, lastName: 'Lannister', firstName: 'Cersei' },
          { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
        ]}
      />
      <button>
        <Link to="/">Entrar</Link>
      </button>
    </div> */
    <Container>
      <div className="back">
        <img src={Background} />
      </div>

      <div className="form">
        <h1>Criar conta</h1>
        <p>Crie sua conta e aproveite nossos serviços!</p>
        <div>
          <form>
            <div className="input-box">
              {' '}
              <input type="text" placeholder="Nome" />
            </div>

            <div className="input-box">
              <input type="email" placeholder="Email" />
            </div>

            <div className="input-box">
              <input type="text" placeholder="CPF" />
            </div>

            <div className="input-box">
              <input type="number" placeholder="Unidade de atendimento" />
            </div>

            <div className="input-box">
              <label>
                {' '}
                Data de nascimento
                <input type="date" placeholder="Data de nascimento" />
              </label>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Crie uma senha" />
            </div>

            <div className="button-cad">
              <button>
                <Link to="/register">Criar conta</Link>
              </button>
            </div>
          </form>
        </div>
        <footer>
          <p>Já possui uma conta?</p>
          <Link to="/">Entrar</Link>
        </footer>
      </div>
    </Container>
  )
}
