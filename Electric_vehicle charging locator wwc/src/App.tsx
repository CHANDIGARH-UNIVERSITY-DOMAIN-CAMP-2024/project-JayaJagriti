import React, { useState } from 'react';
import { Zap } from 'lucide-react';
import Map from './components/Map';
import StationList from './components/StationList';
import Filters from './components/Filters';
import StationDetails from './components/StationDetails';
import { mockStations } from './data/mockStations';
import { ChargingStation } from './types/station';

function App() {
  const [selectedStation, setSelectedStation] = useState<ChargingStation | null>(null);
  const [filteredStations, setFilteredStations] = useState(mockStations);

  const handleFilterChange = (filters: any) => {
    let filtered = [...mockStations];

    if (filters.connector) {
      filtered = filtered.filter(station =>
        station.connectorTypes.includes(filters.connector)
      );
    }

    if (filters.availability === 'available') {
      filtered = filtered.filter(station => station.available > 0);
    }

    if (filters.rating) {
      filtered = filtered.filter(
        station => station.rating >= parseInt(filters.rating)
      );
    }

    if (filters.amenities) {
      filtered = filtered.filter(station =>
        station.amenities.some(amenity =>
          amenity.toLowerCase().includes(filters.amenities.toLowerCase())
        )
      );
    }

    setFilteredStations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center">
            <Zap className="w-8 h-8 text-blue-500 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">EV Charging Finder</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Filters onFilterChange={handleFilterChange} />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Map
              stations={filteredStations}
              onStationSelect={setSelectedStation}
            />
          </div>
          
          <div className="space-y-4">
            <StationList
              stations={filteredStations}
              onStationSelect={setSelectedStation}
              selectedStation={selectedStation || undefined}
            />
          </div>
        </div>

        {selectedStation && (
          <StationDetails
            station={selectedStation}
            onClose={() => setSelectedStation(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;