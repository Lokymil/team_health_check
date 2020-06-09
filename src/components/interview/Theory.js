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
        <article className="with-image">
          <img src="/img/heart.svg" alt="" height="200" />
          <p>
            Understand and help your team grow is a difficult task. It is about
            hearing everybody out on how they feel and relate to their team's
            goal, know team's expectation, know company expectation, etc... In
            fact, it is mostly about feeling and abstract data.
          </p>
          <p>
            In order to take the right decision and minimize risks, we need
            facts and concrete data. This is what TeamHealthCheck is about,
            generate concrete data based on your teammates feeling and
            expectation.
          </p>
          <p>
            However, this tool is what it is, a tool. It won't tell you what to
            do or how to do it. But it will provide you numbers and facts to
            rely on to take decisions or to monitor changes.
          </p>
        </article>
      </section>
      <section id="theory--how">
        <h2>How does it work?</h2>
        <div className="with-image">
          <img className="icon" src="/img/question-mark.svg" alt="" />
          <p>
            First of all, we will ask several questions to your teammate. These
            questions will be used to determine their general mindset.
            <br /> Are they feeling qualified for the job they have to do and
            are they satisfied with their current job ?
          </p>
        </div>
        <div className="with-image">
          <img className="icon" src="/img/cards.svg" alt="" />
          <p>
            Then, your teammate will be asked to use Moving Motivator game to
            sort and assess theirs inherent motivations.
            <br />
            With these information, you will be able to understand what each of
            your co-worker are motivated by and what they expect to find in
            their job.
          </p>
        </div>
        <div className="with-image">
          <img className="icon" src="/img/stats.svg" alt="" />
          <p>
            All these information will be expressed as factual and mesurable
            data. It will allow you to effectively understand and monitor your
            team health.
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
