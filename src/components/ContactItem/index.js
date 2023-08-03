import './index.css'

const ContactItem = props => {
  const {contactDetails, toggleIsFavourite} = props
  const {name, mobileNo, isFavorite, id} = contactDetails

  const onClickFavouriteIcon = () => {
    toggleIsFavourite(id)
  }

  const starImgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/star-filled-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/star-outline-img.png'

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{mobileNo}</p>
        <button type="button" className="favorite-icon-container">
          <img
            src={starImgUrl}
            className="favorite-icon"
            alt="star"
            onClick={onClickFavouriteIcon}
          />
        </button>
      </div>
    </li>
  )
}

export default ContactItem
