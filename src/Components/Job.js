const Job = ({ className, title, contractType, country, city }) => {
  return (
    <div className={`Job ${className}`}>
      <span>{title}</span>
      <div>
        <span>
          {contractType} - {country} - {city}
        </span>
      </div>
    </div>
  );
};
export default Job;
