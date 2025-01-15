import React from 'react';
import { ChargingStation } from '../types/station';
import { X, Battery, Zap, MapPin, Star, Coffee, Wifi, ShoppingBag } from 'lucide-react';

interface StationDetailsProps {
  station: ChargingStation;
  onClose: () => void;
}

const StationDetails: React.FC<StationDetailsProps> = ({ station, onClose }) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'coffee shop':
        return <Coffee className="w-4 h-4" />;
      case 'wifi':
        return <Wifi className="w-4 h-4" />;
      case 'shopping':
        return <ShoppingBag className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold">{station.name}</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex items-center text-gray-600 mb-4">
            <MapPin className="w-5 h-5 mr-2" />
            <p>{station.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Battery className="w-5 h-5 mr-2 text-green-500" />
                <h3 className="font-semibold">Availability</h3>
              </div>
              <p className="text-lg">
                {station.available} of {station.total} stations available
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <Zap className="w-5 h-5 mr-2 text-blue-500" />
                <h3 className="font-semibold">Pricing</h3>
              </div>
              <p className="text-lg">${station.pricePerKwh}/kWh</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Connector Types</h3>
            <div className="flex flex-wrap gap-2">
              {station.connectorTypes.map((type) => (
                <span
                  key={type}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-3">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {station.amenities.map((amenity) => (
                <div
                  key={amenity}
                  className="flex items-center p-2 bg-gray-50 rounded-lg"
                >
                  {getAmenityIcon(amenity)}
                  <span className="ml-2">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 mr-1" />
              <span className="text-lg font-semibold">{station.rating}</span>
            </div>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Navigate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StationDetails;