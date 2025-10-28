// api/webhooks/line.js
export default async function handler(req, res) {
  // まずは通電テスト：POSTなら200、ほかは405を返すだけ
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  return res.status(200).end();
}
