import Title from "../components/Title";
import ConvertFrom from "../components/ConvertFrom";
import ConvertTo from "../components/ConvertTo";
import InputField from "../components/InputField";
import ResultField from "../components/ResultField";
import { useState, useEffect } from "react";

//const keyAPI = "test";

const ConvertisseurPage = () => {
  const keyAPI = "J8d0pLsnlKDqsdEReCBMzVhA79ts77WuQ0glbgBN";
  const [resultValue, setResultValue] = useState("");
  const [selectedValue, setSelectedValue] = useState({ value: "0" });
  const [selectedValidity, setselectedValidity] = useState({ validity: "" });
  const [currencyFrom, setCurrencyFrom] = useState("EUR");
  const [currencyTo, setCurrencyTo] = useState("EUR");
  const [resultJson, setresultJson] = useState({
    isLoading: true,
    res: ""
  });
  const { isLoading, res } = resultJson;
  const { value } = selectedValue;
  const { validity } = selectedValidity;

  useEffect(() => {
    window.M.updateTextFields();
  }, []);

  useEffect(() => {
    setresultJson({
      isLoading: true
    });
    const fetchConv = async () => {
      const resultFetch = await fetch(
        `https://api.currencyapi.com/v3/latest?apikey=${keyAPI}&currencies=${currencyTo}&base_currency=${currencyFrom}`
      );
      const resJson = await resultFetch.json();
      setresultJson({
        isLoading: false,
        res: resJson.data[currencyTo].value
      });
      console.log(
        `change cur to ${currencyTo} & taux = ${resultJson.res} & json = ${resJson.data[currencyTo].value}`
      );
      changeResult();
    };
    fetchConv();
  }, [currencyFrom, currencyTo]);

  useEffect(() => {
    changeResult();
  }, [selectedValue]);

  const changeResult = () => {
    if (
      selectedValue !== "" &&
      selectedValue !== "0" &&
      selectedValue !== undefined
    ) {
      setResultValue(resultJson.res * selectedValue.value);
      console.log(`change result to ${resultValue}`);
    }
  };

  const remove0 = (amount) => {
    return amount.replace(/^0+/, "");
  };

  const handlevalue = (event) => {
    const re = /^[0-9\b]+$/;
    const amount = remove0(event.target.value);
    if (re.test(amount)) {
      setselectedValidity({ validity: "valid" });
    } else {
      setselectedValidity({ validity: "invalid" });
    }
    setSelectedValue({ value: amount });
  };

  return (
    <div className="container">
      <div className="row">
        <Title title="Convertisseur" />
        <div className="col s8">
          <div className="row">
            <ConvertFrom setGetVal={setCurrencyFrom} />
            <ConvertTo setGetVal={setCurrencyTo} />
          </div>
          <div className="row">
            <InputField
              value={value}
              label="Montant"
              validity={validity}
              onChange={handlevalue}
            />
            <ResultField res={resultValue} loading={resultJson.isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertisseurPage;
