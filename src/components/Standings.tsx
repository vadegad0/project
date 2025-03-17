import React from 'react';
import { Trophy } from 'lucide-react';

const teams = [
  {
    name: 'Deportivo Funes',
    played: 2,
    won: 2,
    drawn: 0,
    lost: 0,
    goalsFor: 6,
    goalsAgainst: 1,
    points: 6
  },
  {
    name: 'Atlético Nariño',
    played: 2,
    won: 1,
    drawn: 1,
    lost: 0,
    goalsFor: 4,
    goalsAgainst: 2,
    points: 4
  },
  {
    name: 'Real Pasto',
    played: 2,
    won: 1,
    drawn: 0,
    lost: 1,
    goalsFor: 3,
    goalsAgainst: 3,
    points: 3
  }
];

export function Standings() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Equipo
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              PJ
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              G
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              E
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              P
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              GF
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              GC
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Pts
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {teams.map((team, index) => (
            <tr key={index} className={index === 0 ? 'bg-green-50' : ''}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {index === 0 && <Trophy className="h-5 w-5 text-yellow-500 mr-2" />}
                  <div className="text-sm font-medium text-gray-900">{team.name}</div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.played}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.won}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.drawn}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.lost}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.goalsFor}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">
                {team.goalsAgainst}
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