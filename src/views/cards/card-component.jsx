//@flow

import * as React from 'react';
import classNames from 'classnames';
import { article } from '../../entities';

type CardComponentProps = {
  article: article,
};

type CardComponentState = {
  isFlipped: boolean,
};

export default class CardComponent extends React.Component<CardComponentProps, CardComponentState> {
  constructor(props: CardComponentProps) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    (this: any).cardClickHandler = this.cardClickHandler.bind(this);
  }

  cardClickHandler(event: Event): void {
    let shouldFlip: boolean = true;
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
    const cardClassNames: string = classNames('card', {
      'card--rotate': this.state.isFlipped,
    });
    return (
      <div className={cardClassNames}>
        <div className="card__face card__front" onClick={this.cardClickHandler}>
          <h3 className="card__heading">
            {article.title}
          </h3>
          <img className="card__img" src={article.urlToImage} />
        </div>
        <div className="card__face card__back" onClick={this.cardClickHandler}>
          <p className="card__paragraph">
            {article.description}
          </p>
          <a target="_blank" href={article.url}>
            Go to article <span className="visuallyhidden">(Opens a new tab)</span>
          </a>
        </div>
      </div>
    );
  }
}
