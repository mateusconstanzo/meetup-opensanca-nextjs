import { details } from '../../../../bd'

export default (req, res) => {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
      const detail = details.find((detail) => detail.id == id)
      res.status(200).json(detail)
      break
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
