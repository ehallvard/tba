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
    const tabIndex = this.state.isFlipped ? 0 : -1;
    return (
      <div className={cardClassNames}>
        <button className="card__flip-button" aria-label="Flip card" onClick={this.cardClickHandler}><i className="fa fa-arrow-right"></i></button>
        <div className="card__face card__front" onClick={this.cardClickHandler}>
          <img className="card__img" src={article.urlToImage} />
          <h3 className="card__heading">
            {article.title}
          </h3>
          <p className="card__paragraph">
            {article.description}
          </p>
        </div>
        <div className="card__face card__back" onClick={this.cardClickHandler}>
          <a className="card__anchor" target="_blank" href={article.url} tabIndex={tabIndex}>
            Go to article <span className="visuallyhidden">(Opens a new tab)</span>
          </a>
        </div>
      </div>
    );
  }
}
