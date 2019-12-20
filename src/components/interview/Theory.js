import { NavLink } from "react-router-dom";
import React from "react";

import classNames from "classnames";

import "./Theory.scss";

import questionMark from "./question-mark.svg";
import cards from "./cards.svg";
import heart from "./heart.svg";
import Header from "../layout/Header";
import useSticky from "../../hooks/useSticky";

const Home = () => {
  const sticky = useSticky(false);

  return (
    <>
      <section id="theory--banner">
        <Header light sticky={sticky} />
        <div id="theory--banner--caption" className={classNames({ sticky })}>
          <h1>You want to know the health of your team?</h1>
          <p>Our template will provide you factual data about your team's health</p>
        </div>
        <p id="theory--banner--link">
          <NavLink to="/interview/tryit" className="button">
            Try it
          </NavLink>
        </p>
        <div id="theory--banner--credits">Photo by You X Ventures on Unsplash</div>
      </section>
      <section id="theory--why">
        <h1>Why?</h1>
        <p className="with-image">
          <img src={heart} alt="" />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus enim urna, fermentum nec congue in, dictum sit amet sem. Aliquam tincidunt ex odio, ut convallis nisi venenatis non. Sed
          sodales vitae augue vitae convallis. Cras nunc velit, vehicula vitae auctor id, convallis eget lorem. Curabitur eu rhoncus urna. Etiam eu vestibulum elit. Donec hendrerit ligula nec leo
          laoreet commodo ut et quam. Suspendisse viverra placerat leo in dignissim.
        </p>
      </section>
      <section id="theory--how">
        <h1>How does it work?</h1>
        <p className="with-image">
          <img src={questionMark} alt="" />
          <p>First of all, you will ask several questions to your collaborator. These questions will be used to determine ...</p>
        </p>
        <p className="with-image">
          <img src={cards} alt="" />
          <span>Then, your collaborator will be asked to use Moving Motivator cards to sort and assess theirs inherent motivation. With these information, you will be able to...</span>
        </p>
        <p id="theory--how--link">
          <NavLink to="/interview/tryit" className="button">
            Try now
          </NavLink>
        </p>
      </section>
    </>
    // <div>
    //   <h1>How to do it ?</h1>
    //   <p>
    //     Hello, Do you want to know what is the health of your team? We invite you
    //     to use our template of one-to-one interview in order to have factual data
    //     on the health team.
    //   </p>
    //   <p>
    //     First explain to the person the goal of this interview which is to check
    //     the health of the team. Then, ask the two following questions :
    //   </p>
    //   <ul>
    //     <li>
    //       On a scale of 1 to 10, 1 is the minimum ("Not competent") and 10 is the
    //       maximum ("Over competent"), how do you evaluate your competencies for
    //       your current mission?
    //     </li>
    //     <li>
    //       On a scale of 1 to 10, 1 is the minimum ("Not challenging") and 10
    //       ("Over challenging")is the maximum, how do you evaluate the challenge of
    //       your current mission?
    //     </li>
    //   </ul>
    //   <p>Then ask the two following questions :</p>
    //   <ul>
    //     <li>
    //       On this scale : "Satisfied" , "Indifferent" , "Unsatisfied", how do you
    //       think the management is satisfied of you?
    //     </li>
    //     <li>
    //       On this scale : "Satisfied" , "Indifferent" , "Unsatisfied", how are you
    //       satisfied of the mission ?
    //     </li>
    //   </ul>
    //   <p>
    //     Now, we will use the cards of Moving Motivators from the management 3.0 :
    //     These cards represents the 10 intrinsic motivation for a person which are
    //     Acceptance, Curiosity, Freedom, Status, Goal, Honor, Mastery, Order,
    //     Power, Relatedness.
    //   </p>
    //   <ul>
    //     <li>First introduce all the 10 intrinsic motivation</li>
    //     <li>
    //       Then, we will ask to sort the intrinsic motivations from the highest
    //       important to the lowest important for you un an ideal work environment
    //     </li>
    //     <li>
    //       After the person made his choice, invite this person to explain why the
    //       intrinsic motivation is important for the person.
    //     </li>
    //     <li>
    //       Then, we are in the current mission of the person.
    //       <ul>
    //         <li>
    //           If the intrinsic motivation is fulfilled in your mission, move up
    //           the intrinsic motivation.
    //         </li>
    //         <li>
    //           If there is nothing to say about the intrinsic motivation, don't
    //           move the intrinsic motivation.
    //         </li>
    //         <li>
    //           If the intrinsic motivation is not fulfilled in your mission, move
    //           down the intrinsic motivation.
    //         </li>
    //       </ul>
    //     </li>
    //     <li>
    //       After the person made his choice, invite this person to explain why the
    //       intrinsic motivation is fulfilled or not in the mission.
    //     </li>
    //   </ul>
    //   <p>
    //     Conclude this interview with explaining how the results will be aggregated
    //     and presented to the team and the squad.
    //   </p>
    //   <br />
    //   But, you will say to me, how can I visualize the answers?
    //   <br />
    //   This is currently the purpose of this application. Fill a csv with the
    //   results of your interview. Use one line by person :
    //   <ul>
    //     <li>First column is the note over 10 of the competency</li>
    //     <li>Second column is the note over 10 of the challenge</li>
    //     <li>
    //       Third column is the note of perceived satisfaction of the management : 1
    //       for Satisfied, 0 for Indifferent, -1 for unsatisfied
    //     </li>
    //     <li>
    //       Fourth column is the note of perceived satisfaction of the management :
    //       1 for Satisfied, 0 for Indifferent, -1 for unsatisfied.
    //     </li>
    //     <li>
    //       The next 10 columns are the place of the intrinsic motivation in the
    //       priorities of the person. Set the number 1 for the highest intrinsic
    //       motivation Set the number 2 for the second highest intrinsic motivation
    //       Set the number 10 for the lowest intrinsic motivation
    //     </li>
    //     <li>
    //       Then the next 10 columns are the satisfaction of the intrinsic
    //       motivation in the current workplace. Set 1 if the intrinsic motivation
    //       is fulfilled Set 0 if the intrinsic motivation is indifferent Set -1 if
    //       the intrinsic motivation is not fulfilled
    //     </li>
    //   </ul>
    //   <p>
    //     Other columns will be interpreted as filter. You can then have your on
    //     custom filter.
    //     <br />
    //     For instance you can set the 4 following filters :
    //   </p>
    //   <ul>
    //     <li>
    //       Set True for isOld if the person is ancient on the project, false
    //       otherelse -> Set the name of the team of the person
    //     </li>
    //     <li>
    //       Set True for isJunior if the person is junior on the tech, false
    //       otherelse
    //     </li>
    //     <li>Set True for isDev if the person is a developer, false otherelse.</li>
    //   </ul>
    //   <p>
    //     Once your csv is ready, upload the file, and charts with the results will
    //     be computed.
    //     <br />
    //     Play with your personalized filters in order to have a clearer
    //     understanding of the health of your team.
    //   </p>
    //   <Link to="/visualize/upload">Get my team's health check</Link>
    //   <br />
    //   <Link to="/interview/tryit">Try it</Link>
    // </div>
  );
};

export default Home;
