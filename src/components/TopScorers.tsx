import React from 'react';
import { Goal } from 'lucide-react';

const scorers = [
  {
    name: 'Carlos Martínez',
    team: 'Deportivo Funes',
    goals: 4,
    matches: 2
  },
  {
    name: 'Juan Pérez',
    team: 'Atlético Nariño',
    goals: 3,
    matches: 2
  },
  {
    name: 'Diego López',
    team: 'Real Pasto',
    goals: 2,
    matches: 2
  }
];

export function TopScorers() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Jugador
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Equipo
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Goles
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Partidos
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {scorers.map((scorer, index) => (
            <tr key={index} className={index === 0 ? 'bg-yellow-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {index === 0 && <Goal className="h-5 w-5 text-yellow-500 mr-2" />}
                  <div className="text-sm font-medium text-gray-900">{scorer.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {scorer.team}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold">
                {scorer.goals}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {scorer.matches}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}