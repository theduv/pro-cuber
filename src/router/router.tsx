import { Route } from 'wouter'

import { Layout } from '../domain/layout/Layout'

import HomePage from '../pages/Home/HomePage'
import TimerPage from '../pages/Timer/TimerPage.container'

export const routes = {
  APP: {
    ROOT: '/',
  },

  TIMER: {
    ROOT: '/timer',
  },
}

export const AppRouter = () => (
  <Layout>
    <Route path={routes.APP.ROOT} component={HomePage} />

    <Route path={routes.TIMER.ROOT} component={TimerPage} />
  </Layout>
)
