import { Container } from './page-in'
import { CustomTable } from '../../components/CustomTable/CustomTable'

import Relatorios from './../../images/Relatórios.svg'
export function Pagein() {
  return (
    <Container>
      <header></header>
      <div className="container-info">
        <div className="later">
          <button className="relater">
            {' '}
            <img src={Relatorios} /> Minhas consultas
          </button>
          <button className="relater">
            {' '}
            <img src={Relatorios} /> Agendamento
          </button>
        </div>
        <div className="content">
          <div className="title">
            <h1>Minhas consultas</h1>
          </div>
          <div className="content-table">
            <CustomTable
              columns={[
                {
                  field: 'id',
                  headerName: 'Nome do médico',
                  width: 70,
                  type: 'text',
                },
                { field: 'tipo', headerName: 'Tipo do médico', width: 130 },
                { field: 'Nomeposto', headerName: 'Nome do posto', width: 130 },
                { field: 'status', headerName: 'Status', width: 130 },
                { field: 'data', headerName: 'Data', width: 130 },
                { field: 'acao', headerName: 'Ações', width: 130 },
              ]}
              data={[
                {
                  id: 'fulano de tal',
                  tipo: 'Dentista',
                  Nomeposto: '001',
                  status: 'ativo',
                  data: '14/03/2022',
                  acao: '...',
                },
                {
                  id: 'fulando da de tal',
                  lastName: 'Lannister',
                  firstName: 'Cersei',
                },
                {
                  id: 'fulano de tal',
                  lastName: 'Lannister',
                  firstName: 'Jaime',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
