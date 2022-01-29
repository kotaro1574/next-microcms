import { createClient } from 'microcms-js-sdk'
export const client = createClient({
  serviceDomain: 'ktraw1574',
  apiKey: process.env.API_KEY || '',
})
