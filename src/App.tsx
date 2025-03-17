import React, { useState } from 'react';
import { Calendar, MapPin, Phone, Apple as WhatsApp, Clock, Trophy, Users, Mail, Menu } from 'lucide-react';
import { Tab } from '@headlessui/react';
import { Gallery } from './components/Gallery';
import { MatchSchedule } from './components/MatchSchedule';
import { Standings } from './components/Standings';
import { FairPlay } from './components/FairPlay';
import { TopScorers } from './components/TopScorers';
import { MVPCards } from './components/MVPCards';
import clsx from 'clsx';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { name: 'Calendario', component: MatchSchedule },
    { name: 'Posiciones', component: Standings },
    { name: 'Juego Limpio', component: FairPlay },
    { name: 'Goleadores', component: TopScorers },
    { name: 'MVPs', component: MVPCards },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Trophy className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold">Zonal Baby Fútbol 2025</span>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a href="#tournament" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Torneo
              </a>
              <a href="#schedule" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Calendario
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium">
                Contacto
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#tournament"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Torneo
              </a>
              <a
                href="#schedule"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Calendario
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-green-600 to-yellow-500 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=2000&auto=format&fit=crop")'
          }}
        ></div>
        <div className="container mx-auto px-6 relative z-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Zonal Baby Fútbol<br/>Masculino 2025
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8">
            Clasificatorio al Zonal Nacional Sur Occidente de Colombia
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex items-center bg-white/90 rounded-lg px-6 py-3">
              <Calendar className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-gray-800">8-13 Abril 2025</span>
            </div>
            <div className="flex items-center bg-white/90 rounded-lg px-6 py-3">
              <MapPin className="w-6 h-6 text-green-600 mr-2" />
              <span className="text-gray-800">Municipio de Funes, Nariño</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Galería</h2>
          <Gallery />
        </div>
      </section>

      {/* Tournament Data Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Datos del Torneo</h2>
          <Tab.Group>
            <Tab.List className="flex space-x-1 rounded-xl bg-green-900/20 p-1">
              {tabs.map((tab) => (
                <Tab
                  key={tab.name}
                  className={({ selected }) =>
                    clsx(
                      'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white text-green-700 shadow'
                        : 'text-gray-600 hover:bg-white/[0.12] hover:text-green-600'
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8">
              {tabs.map((tab, idx) => (
                <Tab.Panel
                  key={idx}
                  className={clsx(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-green-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <tab.component />
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" id="contact">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contacto e Inscripciones</h2>
          <div className="max-w-lg mx-auto space-y-6">
            <a
              href="tel:+573183773718"
              className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-6 h-6" />
              318-3773718
            </a>
            <a
              href="tel:+573153215388"
              className="flex items-center justify-center gap-3 w-full bg-green-600 text-white py-4 rounded-lg hover:bg-green-700 transition-colors"
            >
              <Phone className="w-6 h-6" />
              315-3215388
            </a>
            <a
              href="https://wa.me/573183773718"
              className="flex items-center justify-center gap-3 w-full bg-green-500 text-white py-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              <WhatsApp className="w-6 h-6" />
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Zonal Baby Fútbol Masculino 2025</h3>
            <p className="mb-6">Municipio de Funes, Sur de Nariño</p>
            <div className="flex justify-center space-x-6">
              <Mail className="w-6 h-6" />
              <WhatsApp className="w-6 h-6" />
              <Phone className="w-6 h-6" />
            </div>
            <p className="mt-8 text-gray-400">
              © 2025 Zonal Baby Fútbol. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;