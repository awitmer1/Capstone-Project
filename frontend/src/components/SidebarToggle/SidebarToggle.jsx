const SidebarToggle = () => {
  const categories = [
    "Restaurants & Bars",
    "Dog Parks",
    "Public Parks",
    "Pet Stores",
    "Veterenarians",
    "Pet Hospitals",
  ];
  return (
    <div>
      {categories.map((category) => (
        <div>
          <input
            type="checkbox"
            id={category}
            name={category}
            // checked={selectedOptions.includes(category)}
            // onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
    </div>
  );
};

export default SidebarToggle;
