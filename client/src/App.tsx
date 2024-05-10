import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Compile from './pages/Compile'
import NotFound from './pages/NotFound'
import { ThemeProvider } from './components/theme-provider'
const App = () => {
  return (
    <div className="text-2xl">
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/compile' element={<Compile />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div >
  )
}

export default App