import React, { useState } from 'react'
import { Plus, Search, Users, Trophy, Calendar } from 'lucide-react'

const Teams = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const teams = [
    {
      id: 1,
      name: 'Thunder FC',
      players: 12,
      wins: 8,
      losses: 2,
      draws: 1,
      founded: '2020',
      logo: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 2,
      name: 'Lightning United',
      players: 11,
      wins: 6,
      losses: 3,
      draws: 2,
      founded: '2019',
      logo: 'https://images.pexels.com/photos/1884574/pexels-photo-1884574.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 3,
      name: 'Storm Riders',
      players: 13,
      wins: 7,
      losses: 4,
      draws: 0,
      founded: '2021',
      logo: 'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    },
    {
      id: 4,
      name: 'Fire Eagles',
      players: 10,
      wins: 5,
      losses: 5,
      draws: 1,
      founded: '2018',
      logo: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
    }
  ]

  const filteredTeams = teams.filter(team =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Teams</h1>
          <p className="mt-2 text-gray-600">Manage your futsal teams</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Team
        </button>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search teams..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input pl-10"
        />
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTeams.map((team) => (
          <div key={team.id} className="card hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={team.logo}
                alt={team.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{team.name}</h3>
                <p className="text-sm text-gray-600">Founded {team.founded}</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">{team.wins}</div>
                <div className="text-xs text-gray-600">Wins</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-600">{team.draws}</div>
                <div className="text-xs text-gray-600">Draws</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">{team.losses}</div>
                <div className="text-xs text-gray-600">Losses</div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{team.players} players</span>
              </div>
              <div className="flex items-center space-x-1">
                <Trophy className="w-4 h-4" />
                <span>{((team.wins / (team.wins + team.losses + team.draws)) * 100).toFixed(0)}% win rate</span>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="btn-secondary flex-1 text-sm">
                View Details
              </button>
              <button className="btn-primary flex-1 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Team Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 animate-slide-up">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Team</h2>
            <form className="space-y-4">
              <div>
                <label className="label">Team Name</label>
                <input type="text" className="input" placeholder="Enter team name" />
              </div>
              <div>
                <label className="label">Founded Year</label>
                <input type="number" className="input" placeholder="2024" />
              </div>
              <div>
                <label className="label">Description</label>
                <textarea className="input h-20 resize-none" placeholder="Team description..."></textarea>
              </div>
              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="btn-secondary flex-1"
                >
                  Cancel
                </button>
                <button type="submit" className="btn-primary flex-1">
                  Add Team
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Teams