// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachData, onDeletePurpose} = props
  const {id, title, Amount, typedData} = eachData

  const onDeleteButton = () => {
    onDeletePurpose(id)
  }
  return (
    <li className="header-information">
      <p className="title-info">{title}</p>
      <p className="amount-info">{Amount}</p>
      <p className="amount-info">{typedData}</p>
      <button
        data-testid="delete"
        onClick={onDeleteButton}
        className="deleteButton"
        type="button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="image-icon"
        />
      </button>
    </li>
  )
}

export default TransactionItem
