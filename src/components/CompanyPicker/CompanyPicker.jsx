import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import styles from "./CompanyPicker.module.css";
import jsonData from "./symbols.json";

const CompanyPicker = ({ handleCompanyChange }) => {
  const [companies, setCompanies] = useState([]);
  const loadData = () => JSON.parse(JSON.stringify(jsonData));
  console.log(jsonData);
  useEffect(() => {
    const symbol = jsonData.map((value) => value.symbol);
    setCompanies(symbol);
  }, []);
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleCompanyChange(e.target.value)}
      >
        <option value="">Company Symbol</option>
        {companies.map((company, i) => (
          <option key={i} value={company}>
            {company}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CompanyPicker;
