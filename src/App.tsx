import { ChakraProvider, theme } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import defaultRoutes from './public/default-config/routes.json'
import { useState } from 'react'
import FormDemo from './pages/FormDemo'

const componentRegistry: any = {
  home: <HomePage></HomePage>,
  form: <FormDemo></FormDemo>,
}

export const App = () => {
  const [routesConfig] = useState(defaultRoutes)

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          {routesConfig.map((route: any, index) => (
            <Route
              path={route.path}
              element={componentRegistry[route.component]}
              key={index}
            />
          ))}
        </Routes>
      </Router>
    </ChakraProvider>
  )
}
