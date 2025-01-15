import React from 'react';
import { Filter, Zap } from 'lucide-react';

interface FiltersProps {
  onFilterChange: (filters: any) => void;
}

const Filters: React.FC<FiltersProps> = ({ onFilterChange }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-3">
        <Filter className="w-5 h-5 mr-2" />
        <h2 className="text-lg font-semibold">Filters</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <select
          className="p-2 border rounded-md"
          onChange={(e) => onFilterChange({ connector: e.target.value })}
        >
          <option value="">Connector Type</option>
          <option value="CCS">CCS</option>
          <option value="CHAdeMO">CHAdeMO</option>
          <option value="Type 2">Type 2</option>
        </select>

        <select
          className="p-2 border rounded-md"
          onChange={(e) => onFilterChange({ availability: e.target.value })}
        >
          <option value="">Availability</option>
          <option value="available">Available Now</option>
          <option value="all">Show All</option>
        </select>

        <select
          className="p-2 border rounded-md"
          onChange={(e) => onFilterChange({ rating: e.target.value })}
        >
          <option value="">Rating</option>
          <option value="4">4+ Stars</option>
          <option value="3">3+ Stars</option>
        </select>

        <select
          className="p-2 border rounded-md"
          onChange={(e) => onFilterChange({ amenities: e.target.value })}
        >
          <option value="">Amenities</option>
          <option value="restrooms">Restrooms</option>
          <option value="food">Food/Drinks</option>
          <option value="shopping">Shopping</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;