// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {TitleData} = props

  return (
    <ul>
      <div className="flex-container">
        <li className="balance-part">
          <img
            className="image-icon"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
          <div>
            <p className="yourbalance-part">Your Balance</p>
            <p data-testid="balanceAmount" className="yourbalance-part">
              Rs 0
            </p>
          </div>
        </li>
        <li className="balance-part-two">
          <img
            className="image-icon"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
          <div>
            <p className="yourbalance-part">Your Income</p>
            <p data-testid=" incomeAmount" className="yourbalance-part">
              Rs 0
            </p>
          </div>
        </li>
        <li className="balance-part-three">
          <img
            className="image-icon"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
          <div>
            <p className="yourbalance-part">Your Expenses</p>
            <p data-testid="expensesAmount" className="yourbalance-part">
              Rs 0
            </p>
          </div>
        </li>
      </div>
    </ul>
  )
}

export default MoneyDetails
