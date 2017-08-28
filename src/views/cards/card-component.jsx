import * as React from 'react';
import classNames from 'classnames';

export default class CardComponent extends React.Component<{}, {}> {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.cardClickHandler = this.cardClickHandler.bind(this);
  }

  cardClickHandler(event) {
    let shouldFlip = true;
    if (event) {
      const target = event.target;
      if (target.tagName === 'A') {
        shouldFlip = false;
      }
    }
    if (shouldFlip) {
      const isFlipped = this.state.isFlipped;
      this.setState({
        isFlipped: !isFlipped,
      });
    }
  }

  render() {
    const { article } = this.props;
    const imgUrl = article.urlToImage;
    const cardClassNames = classNames('card', {
      'card--rotate': this.state.isFlipped,
    });
    return (
      <div className={cardClassNames}>
        <div className="card__face card__front" onClick={this.cardClickHandler}>
          <h3 className="card__heading">
            {article.title}
          </h3>
          <img className="card__img" src={imgUrl} />
        </div>
        <div className="card__face card__back" onClick={this.cardClickHandler}>
          <p className="card__paragraph">
            {article.description}
          </p>
          <a target="_blank" href={article.url}>
            Go to article{' '}
            <span className="visuallyhidden">(Opens a new tab)</span>
          </a>
        </div>
      </div>
    );
  }
}
