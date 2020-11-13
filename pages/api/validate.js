import { CODE } from './generate';

export default (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not supported' });
  }

  console.log(CODE);
  console.log(new Date());

  res.status(201).json({});
}
