import { useState } from "react";


const RadioItem = ({ label }) => (
  <label className="flex items-center space-x-3 py-1 cursor-pointer hover:text-black transition-colors">
    <input type="radio" name="price-filter" className="w-4 h-4 accent-black" />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
);

// Helper for Checkboxes (Size, Color, Dimension)
const CheckboxItem = ({ label }) => (
  <label className="flex items-center space-x-3 py-1 cursor-pointer hover:text-black transition-colors">
    <input type="checkbox" className="w-4 h-4 accent-black rounded" />
    <span className="text-sm text-gray-600">{label}</span>
  </label>
);

const Accordion = ({ title, isOpen, onClick, children }) => {
  return (
    <div className="border-b border-gray-100 py-4">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center font-semibold text-gray-800"
      >
        {title}
        <span className="text-lg leading-none">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState({
    categories: true,
    price: true,
    size: false,
    color: false,
    dimension: false,
  });

  const toggle = (key) => {
    setOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside className="w-64 space-y-8 p-4">
      {/* Categories Section */}
      <div>
        <button
          onClick={() => toggle("categories")}
          className="w-full flex justify-between items-center font-bold text-gray-900 uppercase tracking-wider text-sm"
        >
          Categories
          <span>{open.categories ? "−" : "+"}</span>
        </button>

        {open.categories && (
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li className="flex justify-between cursor-pointer hover:text-black">Shop <span>+</span></li>
            <li className="flex justify-between cursor-pointer hover:text-black">Services <span>+</span></li>
            <li className="font-semibold text-black pt-2">Jewelry</li>
            <li className="ml-4 hover:text-black cursor-pointer italic">Shoes</li>
            <li className="ml-4 hover:text-black cursor-pointer italic">Wedding</li>
            <li className="ml-4 hover:text-black cursor-pointer italic">Sneakers</li>
            <li className="ml-4 hover:text-black cursor-pointer italic">Clothing</li>
          </ul>
        )}
      </div>

      {/* Filter Selection Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h3 className="font-bold text-sm uppercase tracking-wider">Filter Selection</h3>
          <button className="text-[10px] bg-black text-white px-2 py-1 uppercase font-bold tracking-tighter">
            Clear All
          </button>
        </div>

        <Accordion title="Price" isOpen={open.price} onClick={() => toggle("price")}>
          <RadioItem label="$0.00 - $10.00 (1)" />
          <RadioItem label="$11.00 - $20.00 (3)" />
          <RadioItem label="$21.00 - $30.00 (4)" />
          <RadioItem label="$31.00 - $50.00 (4)" />
        </Accordion>

        <Accordion title="Size" isOpen={open.size} onClick={() => toggle("size")}>
          <CheckboxItem label="S (1)" />
          <CheckboxItem label="M (1)" />
          <CheckboxItem label="L (1)" />
          <CheckboxItem label="XL (1)" />
        </Accordion>

        <Accordion title="Color" isOpen={open.color} onClick={() => toggle("color")}>
          <CheckboxItem label="White (3)" />
          <CheckboxItem label="Black (3)" />
        </Accordion>

        <Accordion title="Dimension" isOpen={open.dimension} onClick={() => toggle("dimension")}>
          <CheckboxItem label="40x60cm (3)" />
          <CheckboxItem label="60x90cm (3)" />
          <CheckboxItem label="80x120cm (3)" />
        </Accordion>
      </div>
    </aside>
  );
};

export default Sidebar;