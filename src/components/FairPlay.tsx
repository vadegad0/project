import React from 'react';
import { Shield } from 'lucide-react';

const fairPlayData = [
  {
    team: 'Deportivo Funes',
    yellowCards: 1,
    redCards: 0,
    points: 1
  },
  {
    team: 'Atlético Nariño',
    yellowCards: 2,
    redCards: 0,
    points: 2
  },
  {
    team: 'Real Pasto',
    yellowCards: 2,
    redCards: 1,
    points: 5
  }
];

export function FairPlay() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Equipo
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tarjetas Amarillas
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Tarjetas Rojas
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Puntos Fair Play
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {fairPlayData.map((team, index) => (
            <tr key={index} className={index === 0 ? 'bg-blue-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {index === 0 && <Shield className="h-5 w-5 text-blue-500 mr-2" />}
                  <div className="text-sm font-medium text-gray-900">{team.team}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  {team.yellowCards}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center">
                <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                  {team.redCards}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-semibold">
                {team.points}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}