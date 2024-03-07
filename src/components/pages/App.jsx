import React from 'react'
import { PageLayout } from '../templates/page-layout/Page-layout'
import { PublicRoutes } from '../../routes/PublicRoutes'


export const App = () => {
  return (
    <PageLayout>
      <PublicRoutes/>
    </PageLayout>
  )
}
