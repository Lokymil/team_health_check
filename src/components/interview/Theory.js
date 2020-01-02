import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
import questionMark from "./question-mark.svg";
import cards from "./cards.svg";
import heart from "./heart.svg";
import Header from "../layout/Header";
import useSticky from "../../hooks/useSticky";
import "./Theory.scss";

const Home = () => {
  const sticky = useSticky(false);

  return (
    <>
      <section id="theory--banner">
        <Header light sticky={sticky} />
        <div id="theory--banner--caption" className={classNames({ sticky })}>
          <h1>You want to know the health of your team?</h1>
          <p>
            Our template will provide you factual data about your team's health
          </p>
        </div>
        <p id="theory--banner--link">
          <Link to="/interview/tryit" className="button">
            Try now
          </Link>
        </p>
        <div id="theory--banner--credits">
          Photo by You X Ventures on Unsplash
        </div>
      </section>
      <section id="theory--why">
        <h2>Why?</h2>
        <p className="with-image">
          <img src={heart} alt="" height="200" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          enim urna, fermentum nec congue in, dictum sit amet sem. Aliquam
          tincidunt ex odio, ut convallis nisi venenatis non. Sed sodales vitae
          augue vitae convallis. Cras nunc velit, vehicula vitae auctor id,
          convallis eget lorem. Curabitur eu rhoncus urna. Etiam eu vestibulum
          elit. Donec hendrerit ligula nec leo laoreet commodo ut et quam.
          Suspendisse viverra placerat leo in dignissim.
        </p>
      </section>
      <section id="theory--how">
        <h2>How does it work?</h2>
        <div className="with-image">
          <img src={questionMark} alt="" />
          <p>
            First of all, you will ask several questions to your collaborator.
            These questions will be used to determine ...
          </p>
        </div>
        <div className="with-image">
          <img src={cards} alt="" />
          <p>
            Then, your collaborator will be asked to use Moving Motivator cards
            to sort and assess theirs inherent motivation. With these
            information, you will be able to...
          </p>
        </div>
        <div id="theory--how--link">
          <Link to="/interview/tryit" className="button">
            Try now
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
