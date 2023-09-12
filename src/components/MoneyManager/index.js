import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    initialList: transactionTypeOptions[0].optionId,
    TitleData: [],
    title: '',
    Amount: '',
    typedData: transactionTypeOptions[0].displayText,
    income: 0,
    expenses: 0,
  }

  PayAmount = event => {
    event.preventDefault()

    const {title, Amount, typedData, income, expenses} = this.state
    const newData = {
      id: uuidv4(),
      title,
      Amount,
      typedData,
      income,
      expenses,
    }
    this.setState(prevState => ({
      TitleData: [...prevState.TitleData, newData],

      title: '',
      Amount,
      income,
      expenses,
    }))
    if (typedData === 'Income') {
      this.setState(prevState => ({
        income: [...(prevState.income + Amount)],
      }))
    } else {
      this.setState({expenses: Amount})
    }
  }

  onDeletePurpose = id => {
    const {TitleData} = this.state
    const FilteredData = TitleData.filter(eachDelete => eachDelete.id !== id)
    this.setState({TitleData: FilteredData})
  }

  onAmountData = event => {
    const {Amount} = this.state
    this.setState({Amount: event.target.value})
    console.log(Amount)
  }

  onIncomePurpose = () => {
    const {typedData} = this.state
    this.setState(prevState => ({
      TitleList: prevState.TitleList.map(eachContact => {
        if (typedData === eachContact.optionId) {
          return {...eachContact, typedData: !eachContact.optionId}
        }
        return eachContact
      }),
    }))
  }

  onTitleData = event => {
    this.setState({title: event.target.value})
  }

  typeData = event => {
    const {typedData} = this.state
    this.setState({typedData: event.target.value})
    console.log(typedData)
  }

  render() {
    const {initialList, TitleData, title, Amount, income, expenses} = this.state

    return (
      <div>
        <div className="background-container">
          <h1 className="Richard-heading">Hi,Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          key={initialList.optionId}
          income={income}
          expenses={expenses}
        />

        <div className="main-container">
          <div className="showdowWhite-container">
            <h1>Add Transaction</h1>
            <form onSubmit={this.PayAmount}>
              <label htmlFor="TITLE">TITLE</label>
              <br />
              <input
                value={title}
                id="TITLE"
                onChange={this.onTitleData}
                placeholder="TITLE"
              />
              <br />
              <label htmlFor="AMOUNT">AMOUNT</label>
              <br />
              <input
                id="AMOUNT"
                value={Amount}
                onChange={this.onAmountData}
                placeholder="AMOUNT"
              />
              <br />
              <p>TYPE</p>
              <select
                key={transactionTypeOptions.optionId}
                onChange={this.typeData}
                value={transactionTypeOptions.optionId}
              >
                {transactionTypeOptions.map(eachUser => (
                  <option value={eachUser.optionId} key={eachUser.optionId}>
                    {eachUser.displayText}
                  </option>
                ))}
              </select>
              <br />
              <button className="buttondata" type="submit">
                Add
              </button>
            </form>
          </div>
          <div>
            <h1>History</h1>
            <div className="header-information">
              <p className="title-info">Title</p>
              <p className="amount-info">Amount</p>
              <p className="amount-info">Type</p>
            </div>
            {TitleData.map(eachData => (
              <TransactionItem
                onDeletePurpose={this.onDeletePurpose}
                key={eachData.id}
                eachData={eachData}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
