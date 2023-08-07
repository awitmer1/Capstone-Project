const SidebarToggle = ({ selectedOptions, handleCheckboxChange }) => {
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
      <p>Display Category</p>
      {categories.map((category) => (
        <div>
          <input
            type='checkbox'
            id={category}
            name={category}
            value={category}
            checked={selectedOptions.includes(category)}
            onChange={() => handleCheckboxChange(category)}
          />
          <label htmlFor={category}>{category}</label>
        </div>
      ))}
      {/* <div>
        {selectedOptions.map((option) => (
          <p>{option}</p>
        ))}
      </div> */}
    </div>
  );
};

export default SidebarToggle;
