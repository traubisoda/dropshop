import https from 'https'

// TODO: only in dev
export default function({ $axios }) {
  $axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: process.env.NODE_ENV === 'production'
  })
}
