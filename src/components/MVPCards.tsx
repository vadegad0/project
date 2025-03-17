import React from 'react';
import { Star } from 'lucide-react';

const mvpPlayers = [
  {
    name: 'Carlos Martínez',
    team: 'Deportivo Funes',
    position: 'Delantero',
    stats: 'Goles: 4, Asistencias: 2',
    image: 'https://images.unsplash.com/photo-1628891890467-b79de80b8c1a?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Juan Pérez',
    team: 'Atlético Nariño',
    position: 'Mediocampista',
    stats: 'Goles: 3, Asistencias: 3',
    image: 'https://images.unsplash.com/photo-1627541718143-1adc1b582e62?q=80&w=300&auto=format&fit=crop'
  },
  {
    name: 'Diego López',
    team: 'Real Pasto',
    position: 'Defensa',
    stats: 'Goles: 1, Atajadas: 5',
    image: 'https://images.unsplash.com/photo-1621571113981-1c4dd0f4b8c0?q=80&w=300&auto=format&fit=crop'
  }
];

export function MVPCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mvpPlayers.map((player, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200"
        >
          <div className="relative h-48">
            <img
              src={player.image}
              alt={player.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Star className="h-6 w-6 text-yellow-400 fill-current" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-900">{player.name}</h3>
            <p className="text-sm text-gray-600">{player.team}</p>
            <p className="text-sm text-gray-500">{player.position}</p>
            <p className="mt-2 text-sm font-medium text-gray-700">{player.stats}</p>
          </div>
        </div>
      ))}
    </div>
  );
}