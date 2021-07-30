// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// route: api/hello
export default function handler(req, res) {
  // res.statusCode is the same as res.status
  res.status(200).json({ name: 'Bat Man' });
}
