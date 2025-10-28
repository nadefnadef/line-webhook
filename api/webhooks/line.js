// api/webhooks/line.js
export default async function handler(req, res) {
  // まずは通電用スタブ：POSTで来たら200を返すだけ
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  return res.status(200).end();
}
