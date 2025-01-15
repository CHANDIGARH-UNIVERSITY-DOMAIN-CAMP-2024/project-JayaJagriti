import { ChargingStation } from '../types/station';

export const mockStations: ChargingStation[] = [
  {
    id: '1',
    name: 'Downtown EV Hub',
    location: { lat: 40.7128, lng: -74.0060 },
    address: '123 Main St, New York, NY',
    available: 3,
    total: 6,
    rating: 4.5,
    pricePerKwh: 0.35,
    connectorTypes: ['CCS', 'CHAdeMO', 'Type 2'],
    amenities: ['Restrooms', 'Coffee Shop', 'WiFi']
  },
  {
    id: '2',
    name: 'Green Energy Station',
    location: { lat: 40.7282, lng: -73.9942 },
    address: '456 Park Ave, New York, NY',
    available: 1,
    total: 4,
    rating: 4.2,
    pricePerKwh: 0.32,
    connectorTypes: ['CCS', 'Type 2'],
    amenities: ['24/7 Access', 'Parking']
  },
  {
    id: '3',
    name: 'Tech Plaza Chargers',
    location: { lat: 40.7589, lng: -73.9851 },
    address: '789 Tech Blvd, New York, NY',
    available: 0,
    total: 8,
    rating: 4.8,
    pricePerKwh: 0.38,
    connectorTypes: ['CCS', 'CHAdeMO', 'Type 2'],
    amenities: ['Shopping', 'Restaurants', 'Valet']
  }
];