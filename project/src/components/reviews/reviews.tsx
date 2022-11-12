import ReviewForm from './review-form/review-form';
import {ReviewsType} from '../../types/types-reviews';
import {calculateStarRating} from '../../utils/utils';

type ReviewProps = {
  reviews: ReviewsType;
}

function Reviews({reviews}: ReviewProps): JSX.Element {
  const reviewsItems = reviews.map((review) => (
    <li className="reviews__item" key={review.id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${calculateStarRating(review.rating)}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={review.date}>{review.date}</time>
      </div>
    </li>
  ));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsItems}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default Reviews;
