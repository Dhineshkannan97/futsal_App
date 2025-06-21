import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Teams from './pages/Teams'
import Players from './pages/Players'
import Matches from './pages/Matches'
import Tournaments from './pages/Tournaments'
import Statistics from './pages/Statistics'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/players" element={<Players />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/tournaments" element={<Tournaments />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Layout>
  )
}

export default App