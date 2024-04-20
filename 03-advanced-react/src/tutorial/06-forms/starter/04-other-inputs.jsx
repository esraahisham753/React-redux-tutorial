import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [freeShipping, setFreeShipping] = useState(false);
  const [framework, setFramework] = useState(frameworks[0]);

  const handleShipping = (e) => {
    setFreeShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("freeShipping", freeShipping);
    console.log("Framework", framework);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            id="freeShipping"
            name="freeShipping"
            checked={freeShipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}>
            {frameworks.map((framework) => {
              return (
                <option value={framework} key={framework}>
                  {framework}
                </option>
              );
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default OtherInputs;
