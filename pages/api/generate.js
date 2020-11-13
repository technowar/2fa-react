// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export let CODE = {
  value: Math.floor(100000 + Math.random() * 900000),
  exp: new Date(+new Date() + 300000),
};

export default (req, res) => {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not supported' });
  }

  res.status(201).json({ value: CODE.value });
}
