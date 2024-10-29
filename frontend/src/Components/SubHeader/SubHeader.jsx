import React from "react";
import "./SubHeader.scss";

const SubHeader = () => {
  return (
    <div className="subheader-container">
      <div className="header-content">
        <a href="#" className="active">
          Finance & Accounting
        </a>
        <a
          href="https://www.udemy.com/courses/finance-and-accounting/accounting-bookkeeping/"
          target="_blank"
        >
          Accounting & Bookkeeping
        </a>
        <a
          href="https://www.udemy.com/courses/finance-and-accounting/cryptocurrency-and-blockchain/"
          target="_blank"
        >
          Cryptocurrency & Blockchain
        </a>
        <a
          href="https://www.udemy.com/courses/finance-and-accounting/finance-management/"
          target="_blank"
        >
          Finance
        </a>
        <a
          href="https://www.udemy.com/courses/finance-and-accounting/financial-modeling-and-analysis/"
          target="_blank"
        >
          Financial Modeling & Analysis
        </a>
        <a
          href="https://www.udemy.com/courses/finance-and-accounting/investing-and-trading/"
          target="_blank"
        >
          Investing&Trading
        </a>
      </div>
    </div>
  );
};

export default SubHeader;
