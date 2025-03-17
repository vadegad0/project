import React from 'react';
import { Calendar } from 'lucide-react';

const matches = [
  {
    date: '8 Abril',
    time: '10:00',
    teamA: 'Deportivo Funes',
    teamB: 'Atlético Nariño',
    score: 'Por jugar',
    phase: 'Fase de Grupos'
  },
  {
    date: '8 Abril',
    time: '14:00',
    teamA: 'Real Pasto',
    teamB: 'Ipiales FC',
    score: 'Por jugar',
    phase: 'Fase de Grupos'
  },
  {
    date: '9 Abril',
    time: '10:00',
    teamA: 'CD Tumaco',
    teamB: 'La Union FC',
    score: 'Por jugar',
    phase: 'Fase de Grupos'
  }
];

export function MatchSchedule() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Equipos
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Resultado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fase
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {matches.map((match, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">{match.date}</div>
                    <div className="text-sm text-gray-500">{match.time}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm text-gray-900">{match.teamA}</div>
                <div className="text-sm text-gray-900">vs</div>
                <div className="text-sm text-gray-900">{match.teamB}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {match.score}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {match.phase}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}