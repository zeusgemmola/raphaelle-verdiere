const ConvertFrom = ({ setGetVal }) => {
  const changeCurrencyFrom = (e) => {
    setGetVal(e.target.value);
  };

  return (
    <div className="col s6">
      <label>From</label>
      <select
        defaultValue="EUR"
        className="browser-default"
        name="inputDevises"
        id="inputDevises"
        onChange={changeCurrencyFrom}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default ConvertFrom;
