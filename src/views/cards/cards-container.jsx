//@flow

import * as React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from './cards-core';
import CardComponent from './card-component.jsx';
import { article } from '../../entities';

type CardsContainerProps = {
  fetchNews: () => void,
  articles: article[],
};

export class CardsContainer extends React.Component<CardsContainerProps, {}> {
  constructor(props: CardsContainerProps) {
    super(props);
  }

  componentDidMount() {
    if (this.props.fetchNews) {
      this.props.fetchNews();
    }
  }

  render() {
    const { articles } = this.props;
    return (
      <div>
        <h1 className="page__header">Nyheter</h1>
        <div className="cards">
          {articles
            ? articles.map((article, index) => {
                return <CardComponent key={index} article={article} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardsContainer);
