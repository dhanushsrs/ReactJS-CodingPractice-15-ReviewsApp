// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {actualReviewIndex: 0}

  onClickRight = () => {
    const {actualReviewIndex} = this.state
    const {reviewsList} = this.props

    if (actualReviewIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        actualReviewIndex: prevState.actualReviewIndex + 1,
      }))
    }
  }

  renderActiveReview = currentReviewDetails => {
    const {imgUrl, username, companyName, description} = currentReviewDetails

    return (
      <div className="review-container">
        <img src={imgUrl} alt={username} />
        <p className="user-name">{username}</p>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }

  onClickLeft = () => {
    const {actualReviewIndex} = this.state

    if (actualReviewIndex > 0) {
      this.setState(prevState => ({
        actualReviewIndex: prevState.actualReviewIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {actualReviewIndex} = this.state
    const currentReviewDetails = reviewsList[actualReviewIndex]

    return (
      <div className="app-container">
        <h1 className="heading">Reviews</h1>
        <div className="carousel-container">
          <button
            className="arrow-button"
            type="button"
            data-testid="leftArrow"
            onClick={this.onClickLeft}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.renderActiveReview(currentReviewDetails)}
          <button
            className="arrow-button"
            type="button"
            data-testid="rightArrow"
            onClick={this.onClickRight}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
