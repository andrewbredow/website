import 'babel-polyfill'
import express from 'express'
import path from 'path'
import log from './log'
import proxy from 'http-proxy-middleware'
import clientRouteHandler from './client-route-handler'

const app = express()
const port = process.env.PORT
const publicPath = path.resolve(__dirname, '../../build/frontend')
app.enable('trust proxy')

app.get('/', (req, res) => {
  res.redirect('/home')
})

app.use(express.static(publicPath, {
  maxAge: '180 days'
}))

app.use('/go',
  proxy({
    target: 'http://brandnewcongress.nationbuilder.com',
    changeOrigin: true,
    pathRewrite: {
      '^/go': '/'
    }
  })
)

app.use([
  '/teams',
  '/callteam',
  '/helpdesk',
  '/talentteam',
  '/eventsteam',
  '/legal_team',
  '/moneyteam',
  '/travelteam',
  '/crmteam',
  '/analytics_team',
  '/web_team',
  '/techteam',
  '/platformteam',
  '/creative_team',
  '/social_media',
  '/email_team',
  '/pressteam'],
  proxy({
    target: 'http://brandnewcongress.nationbuilder.com',
    changeOrigin: true
  }))

app.use([
  '/home',
  '/assets',
  '/about',
  '/teams',
  '/abteam',
  '/adteam',
  '/call',
  '/conferencecallteam',
  '/dataentryteam',
  '/faq',
  '/officeteam',
  '/researchteam',
  '/shareteam',
  '/spreadsheetteam',
  '/textingteam',
  '/wikiteam',
  '/travelteam'],
  proxy({
    target: 'http://brandnewcongress.github.io',
    changeOrigin: true
  }))

app.use(clientRouteHandler)
app.listen(port, () => {
  log.info(`Node app is running on port ${port}`)
})
