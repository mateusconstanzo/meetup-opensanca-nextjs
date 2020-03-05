import { users } from '../../bd'

export default (req, res) => {
  res.status(200).json(users)
}
