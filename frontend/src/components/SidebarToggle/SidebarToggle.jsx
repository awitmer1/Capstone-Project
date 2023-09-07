import "./SidebarToggle.css";

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
    <div className='sidebar' key={categories}>
      <p className='sidebar-title'>Filter By:</p>
      {categories.map((category) => (
        <div className='sidebar-category-boxes'>
          <input
            type='checkbox'
            id={category}
            className='sidebar-category-boxes'
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
