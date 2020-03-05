import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout'

const style = {
  border: '1px solid #aaa',
  padding: '.5em .5em 0'
};

const User = ({ user, detail }) => (
  <Layout >
    <h2>Detalhes</h2>

    <details open style={style} >
      <summary>Usuário - {user.id}</summary>
      <p>Nome - {user.name}</p>
      <p>Idade - {detail.idade}</p>
    </details>

  </Layout>
)

const getUser = async (id) => fetch(`http://localhost:3000/api/user/${id}`).then(res => res.json())

const getDetails = async (id) => fetch(`http://localhost:3000/api/user/details/${id}`).then(res => res.json())

User.getInitialProps = async ({ query: { id } }) => {

  const [user, detail] = await Promise.all([
    getUser(id),
    getDetails(id)
  ])

  return { user, detail }
}

export default User
