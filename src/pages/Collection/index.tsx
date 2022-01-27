import { useState } from 'react'
import { IConfig } from '../../interfaces'
import configDefault from '../../public/default-config/home.json'
import { renderComponent } from '../../services/render'

const HomePage = () => {
  const [config] = useState<IConfig>(configDefault)
  return renderComponent(config)
}

export default HomePage
