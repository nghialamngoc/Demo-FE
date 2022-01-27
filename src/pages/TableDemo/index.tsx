import { Flex } from '@chakra-ui/layout'
import { useState } from 'react'
import { IConfig } from '../../interfaces'
import configDefault from '../../public/default-config/table-demo.json'
import { renderComponent } from '../../services/renderComponent'

const TableDemo = () => {
  const [config] = useState<IConfig>(configDefault)
  return <Flex>{renderComponent(config)}</Flex>
}

export default TableDemo
