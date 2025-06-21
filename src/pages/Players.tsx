import React, { useState } from 'react'
import { Plus, Search, User, Award, Calendar } from 'lucide-react'

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)
  const [selectedPosition, setSelectedPosition] = useState('all')

  const players = [
    {
      id: 1,
      name: 'Marcus Silva',
      team: 'Thunder FC',
      position: 'Goalkeeper',
      age: 25,
      goals: 0,
      assists: 2,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 2,
      name: 'Diego Rodriguez',
      team: 'Lightning United',
      position: 'Pivot',
      age: 28,
      goals: 15,
      assists: 8,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 3,
      name: 'Carlos Santos',
      team: 'Storm Riders',
      position: 'Winger',
      age: 23,
      goals: 12,
      assists: 6,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 4,
      name: 'Rafael Lima',
      team: 'Fire Eagles',
      position: 'Defender',
      age: 26,
      goals: 3,
      assists: 4,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 5,
      name: 'Andre Costa',
      team: 'Thunder FC',
      position: 'Winger',
      age: 24,
      goals: 9,
      assists: 11,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      id: 6,
      name: 'Bruno Oliveira',
      team: 'Lightning United',
      position: 'Pivot',
      age: 29,
      goals: 18,
      assists: 5,
      matches: 11,
      photo: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ]

  const positions = ['all', 'Goalkeeper', 'Defender', 'Winger', 'Pivot']

  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         player.team.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPosition = selectedPosition === 'all' || player.position === selectedPosition
    return matchesSearch && matchesPosition
  })

  const getPositionColor = (position: string) => {
    switch (position) {
      case 'Goalkeeper': return 'bg-blue-100 text-blue-800'
      case 'Defender': return 'bg-green-100 text-green-800'
      case 'Winger': return 'bg-yellow-100 text-yellow-800'
      case 'Pivot': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Players</h1>
          <p className="mt-2 text-gray-600">Manage your futsal players</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="btn-primary mt-4 sm:mt-0"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Player
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search players or teams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
        <select
          value={selectedPosition}
          onChange={(e) => setSelectedPosition(e.target.value)}
          className="input sm:w-48"
        >
          {positions.map(position => (
            <option key={position} value={position}>
              {position === 'all' ? 'All Positions' : position}
            </option>
          ))}
        </select>
      </div>

      {/* Players Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="card hover:scale-105 transition-transform duration-200">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={player.photo}
                alt={player.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">{player.name}</h3>
                <p className="text-sm text-gray-600">{player.team}</p>
                <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${getPositionColor(player.position)}`}>
                  {player.position}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mb-4 text-center">
              <div>
                <div className="text-lg font-bold text-gray-900">{player.age}</div>
                <div className="text-xs text-gray-600">Age</div>
              </div>
              <div>
                <div className="text-lg font-bold text-green-600">{player.goals}</div>
                <div className="text-xs text-gray-600">Goals</div>
              </div>
              <div>
                <div className="text-lg font-bold text-blue-600">{player.assists}</div>
                <div className="text-xs text-gray-600">Assists</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-600">{player.matches}</div>
                <div className="text-xs text-gray-600">Matches</div>
              </div>
            </div>

            <div className="flex space-x-2">
              <button className="btn-secondary flex-1 text-sm">
                <User className="w-4 h-4 mr-1" />
                Profile
              </button>
              <button className="btn-primary flex-1 text-sm">
                <Award className="w-4 h-4 mr-1" />
                Stats
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Player Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4 animate-slide-up">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Player</h2>
            <form className="space-y-4">
              <div>
                <label className="label">Player Name</label>
                <input type="text" className="input" placeholder="Enter player name" />
              </div>
              <div>
                <label className="label">Age</label>
                <input type="number" className="input" placeholder="25" />
              </div>
              <div>
                <label className="label">Position</label>
                <select className="input">
                  <option value="">Select position</option>
                  <option value="Goalkeeper">Goalkeeper</option>
                  <option value="Defender">Defender</option>
                  <option value="Winger">Winger</option>
                  <option value="Pivot">Pivot</option>
                </select>
              </div>
              <div>
                <label className="label">Team</label>
                <select className="input">
                  <option value="">Select team</option>
                  <option value="Thunder FC">Thunder FC</option>
                  <option value="Lightning United">Lightning United</option>
                  <option value="Storm Riders">Storm Riders</option>
                  <option value="Fire Eagles">Fire Eagles</option>
                </select>
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
                  Add Player
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default Players