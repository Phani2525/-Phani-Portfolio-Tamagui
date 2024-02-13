import ServiceDetailScreen from './index'
import React from 'react'

export default {
  title: 'screens/Servicedetail',
  component: ServiceDetailScreen,
  parameters: {
    status: {
      type: 'beta',
    },
  },
}

export const main = (args) => <ServiceDetailScreen {...args} />
