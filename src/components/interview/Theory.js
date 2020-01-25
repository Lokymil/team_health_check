import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";
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
          <img src="/img/heart.svg" alt="" height="200" />
          Understand and help your team to grow is a difficult task. The point
          of this website is to generate factual and mesurable data base on your
          co-worker answer.
          <br />
          These dat will help you understand you team and take decision to make
          your co-worker grow.
        </p>
      </section>
      <section id="theory--how">
        <h2>How does it work?</h2>
        <div className="with-image">
          <img className="icon" src="/img/question-mark.svg" alt="" />
          <p>
            First of all, you will ask several questions to your collaborator.
            These questions will be used to determine their general mindset.
            <br /> Are they feeling qualified for the job have to do and are
            they satisfied with their current job ?
          </p>
        </div>
        <div className="with-image">
          <img className="icon" src="/img/cards.svg" alt="" />
          <p>
            Then, your collaborator will be asked to use Moving Motivator game
            to sort and assess theirs inherent motivation.
            <br />
            With these information, you will be able to understand what each of
            your co-worker are motivated by and what do they expect to find in
            their job.
          </p>
        </div>
        <div className="with-image">
          <img className="icon" src="/img/stats.svg" alt="" />
          <p>
            All these information will be expressed as factual and mesurable
            data. It will allow you to effectively compare your team health
            evolution.
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
