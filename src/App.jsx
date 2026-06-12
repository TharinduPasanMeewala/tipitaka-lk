import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import DashboardPage from './pages/Dashboard.jsx'
import UserPage from './pages/User.jsx'
import TextPage from './pages/Text.jsx'
import CollectionPage from './pages/Collection.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/collection" element={<CollectionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}