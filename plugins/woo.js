import https from 'https'
import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api'

export default function(ctx, inject) {
  const api = new WooCommerceRestApi({
    url: process.env.API_URL,
    consumerKey: process.env.WOO_KEY,
    consumerSecret: process.env.WOO_SECRET,
    version: 'wc/v3',
    axiosConfig: {
      httpsAgent: new https.Agent({
        rejectUnauthorized: process.env.NODE_ENV === 'production'
      })
    }
  })
  inject('woo', api)
}
