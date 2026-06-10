import { useState } from 'react';

const filterOptions = {
  shape: ['Round', 'Oval', 'Rectangle', 'Square', 'Cat Eye', 'Browline'],
  size: ['Narrow', 'Standard', 'Wide'],
  material: ['Acetate', 'Metal', 'TR90'],
  colour: ['Black', 'Tortoiseshell', 'Crystal', 'Gold', 'Silver', 'Blue'],
};

const ProductListerFilters = ({
  showShapeFilter = true,
  showSizeFilter = true,
  showMaterialFilter = true,
  showColourFilter = true,
}) => {
  const [selected, setSelected] = useState({});

  const toggle = (group, value) => {
    setSelected((prev) => {
      const existing = prev[group] || [];
      const updated = existing.includes(value)
        ? existing.filter((v) => v !== value)
        : [...existing, value];
      return { ...prev, [group]: updated };
    });
  };

  const filters = [
    { key: 'shape', label: 'Shape', show: showShapeFilter },
    { key: 'size', label: 'Size', show: showSizeFilter },
    { key: 'material', label: 'Material', show: showMaterialFilter },
    { key: 'colour', label: 'Colour', show: showColourFilter },
  ].filter((f) => f.show);

  return (
    <div className="flex flex-wrap gap-6 border-b border-[#e5e7eb] pb-4">
      {filters.map((filter) => (
        <div key={filter.key}>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-[#5a554e]">
            {filter.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {filterOptions[filter.key].map((option) => {
              const active = (selected[filter.key] || []).includes(option);
              return (
                <button
                  key={option}
                  onClick={() => toggle(filter.key, option)}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    active
                      ? 'border-[#006699] bg-[#006699] text-white'
                      : 'border-[#e5e7eb] bg-white text-[#5a554e] hover:border-[#006699] hover:text-[#006699]'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListerFilters;
