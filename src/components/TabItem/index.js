import './index.css'

const TabItem = props => {
  const {tabDetails, updateTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onButtonClick = () => {
    updateTabId(tabId)
  }

  const isActiveOrNot = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${isActiveOrNot}`}
        onClick={onButtonClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
