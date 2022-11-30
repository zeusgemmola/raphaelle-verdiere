import Spinner from "./Spinner/index.js";

const ResultField = ({ res, loading }) => (
  <div className="input-field col s12">
    <h5>Result : {loading ? <Spinner /> : res}</h5>
  </div>
);

export default ResultField;
