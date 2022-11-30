const ConvertTo = ({ setGetVal }) => {
  const changeCurrencyTo = (e) => {
    setGetVal(e.target.value);
  };

  return (
    <div className="col s6">
      <label>To</label>
      <select
        defaultValue="EUR"
        className="browser-default"
        name="outputDevises"
        id="outputDevises"
        onChange={changeCurrencyTo}
      >
        <option value="EUR">EUR</option>
        <option value="CHF">CHF</option>
        <option value="GBP">GBP</option>
        <option value="USD">USD</option>
      </select>
    </div>
  );
};

export default ConvertTo;
