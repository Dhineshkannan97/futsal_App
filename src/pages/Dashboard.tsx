import React from 'react'
import { Calendar, Users, Trophy, TrendingUp, Clock, MapPin } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    { name: 'Total Teams', value: '12', icon: Users, color: 'bg-blue-500' },
    { name: 'Active Players', value: '156', icon: Users, color: 'bg-green-500' },
    { name: 'Matches Played', value: '48', icon: Calendar, color: 'bg-purple-500' },
    { name: 'Tournaments', value: '3', icon: Trophy, color: 'bg-yellow-500' },
  ]

  const upcomingMatches = [
    {
      id: 1,
      homeTeam: 'Thunder FC',
      awayTeam: 'Lightning United',
      date: '2025-01-15',
      time: '19:00',
      venue: 'Arena Central'
    },
    {
      id: 2,
      homeTeam: 'Storm Riders',
      awayTeam: 'Fire Eagles',
      date: '2025-01-16',
      time: '20:30',
      venue: 'Sports Complex'
    },
    {
      id: 3,
      homeTeam: 'Ice Wolves',
      awayTeam: 'Golden Hawks',
      date: '2025-01-17',
      time: '18:00',
      venue: 'Arena Central'
    }
  ]

  const recentResults = [
    {
      id: 1,
      homeTeam: 'Thunder FC',
      awayTeam: 'Storm Riders',
      homeScore: 4,
      awayScore: 2,
      date: '2025-01-10'
    },
    {
      id: 2,
      homeTeam: 'Lightning United',
      awayTeam: 'Fire Eagles',
      homeScore: 1,
      awayScore: 3,
      date: '2025-01-09'
    },
    {
      id: 3,
      homeTeam: 'Ice Wolves',
      awayTeam: 'Golden Hawks',
      homeScore: 2,
      awayScore: 2,
      date: '2025-01-08'
    }
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your futsal management center</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="card hover:scale-105 transition-transform duration-200">
            <div className="flex items-center">
              <div className={`flex-shrink-0 p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upcoming Matches */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Matches</h2>
            <Calendar className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 text-sm font-medium text-gray-900">
                    <span>{match.homeTeam}</span>
                    <span className="text-gray-400">vs</span>
                    <span>{match.awayTeam}</span>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{match.date} at {match.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{match.venue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Recent Results</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentResults.map((result) => (
              <div key={result.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{result.homeTeam}</span>
                      <span className="text-lg font-bold text-gray-900">{result.homeScore}</span>
                    </div>
                    <span className="text-sm text-gray-500">-</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">{result.awayScore}</span>
                      <span className="text-sm font-medium text-gray-900">{result.awayTeam}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{result.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <button className="btn-primary">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule Match
          </button>
          <button className="btn-secondary">
            <Users className="w-4 h-4 mr-2" />
            Add Team
          </button>
          <button className="btn-secondary">
            <Trophy className="w-4 h-4 mr-2" />
            Create Tournament
          </button>
          <button className="btn-secondary">
            <TrendingUp className="w-4 h-4 mr-2" />
            View Reports
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard