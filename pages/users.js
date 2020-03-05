import fetch from 'isomorphic-unfetch'
import Link from 'next/link'
import Layout from '../components/Layout'

const tableStyle = {
  fontFamily: 'arial, sans-serif',
  borderCollapse: 'collapse',
  width: '100%'
};

const tbodyStyle = {
  border: '1px solid #dddddd',
  textAlign: 'left',
  padding: '8px'
};


const Users = ({ users }) => (
  <Layout >
    <h2>Usuários</h2>

    <table style={tableStyle}>

      <thead style={tbodyStyle}>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Detalhes</th>
        </tr>
      </thead>

      <tbody style={tbodyStyle}>
        {users.map(user => (

          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>
              <Link href="/user/[id]" as={`/user/${user.id}`}>
                <a>link</a>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </Layout>
)

Users.getInitialProps = async () => {

  const users = await fetch('http://localhost:3000/api/users').then(res => res.json())

  return { users }
}

export default Users
