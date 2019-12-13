import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <article>
    <p>
      Hello, Do you want to know what is the health of your team? We invite you
      to use our template of one-to-one interview in order to have factual data
      on the health team.
    </p>
    <p>
      First explain to the person the goal of this interview which is to check
      the health of the team. Then, ask the two following questions :
      <ul>
        <li>
          On a scale of 1 to 10, 1 is the minimum ("Not competent") and 10 is
          the maximum ("Over competent"), how do you evaluate your competencies
          for your current mission?
        </li>
        <li>
          On a scale of 1 to 10, 1 is the minimum ("Not challenging") and 10
          ("Over challenging")is the maximum, how do you evaluate the challenge
          of your current mission?
        </li>
      </ul>
    </p>
    <p>
      Then ask the two following questions :
      <ul>
        <li>
          On this scale : "Satisfied" , "Indifferent" , "Unsatisfied", how do
          you think the management is satisfied of you?
        </li>
        <li>
          On this scale : "Satisfied" , "Indifferent" , "Unsatisfied", how are
          you satisfied of the mission ?
        </li>
      </ul>
    </p>
    <p>
      Now, we will use the cards of Moving Motivators from the management 3.0 :
      These cards represents the 10 intrinsic motivation for a person which are
      Acceptance, Curiosity, Freedom, Status, Goal, Honor, Mastery, Order,
      Power, Relatedness.
      <ul>
        <li>First introduce all the 10 intrinsic motivation</li>
        <li>
          Then, we will ask to sort the intrinsic motivations from the highest
          important to the lowest important for you un an ideal work environment
        </li>
        <li>
          After the person made his choice, invite this person to explain why
          the intrinsic motivation is important for the person.
        </li>
        <li>
          Then, we are in the current mission of the person.
          <ul>
            <li>
              If the intrinsic motivation is fulfilled in your mission, move up
              the intrinsic motivation.
            </li>
            <li>
              If there is nothing to say about the intrinsic motivation, don't
              move the intrinsic motivation.
            </li>
            <li>
              If the intrinsic motivation is not fulfilled in your mission, move
              down the intrinsic motivation.
            </li>
          </ul>
        </li>
        <li>
          After the person made his choice, invite this person to explain why
          the intrinsic motivation is fulfilled or not in the mission.
        </li>
      </ul>
    </p>
    <p>
      Conclude this interview with explaining how the results will be aggregated
      and presented to the team and the squad.
      <br />
      But, you will say to me, how can I visualize the answers?
      <br />
      This is currently the purpose of this application. Fill a csv with the
      results of your interview. Use one line by person :
      <ul>
        <li>First column is the note over 10 of the competency</li>
        <li>Second column is the note over 10 of the challenge</li>
        <li>
          Third column is the note of perceived satisfaction of the management :
          1 for Satisfied, 0 for Indifferent, -1 for unsatisfied
        </li>
        <li>
          Fourth column is the note of perceived satisfaction of the management
          : 1 for Satisfied, 0 for Indifferent, -1 for unsatisfied.
        </li>
        <li>
          The next 10 columns are the place of the intrinsic motivation in the
          priorities of the person. Set the number 1 for the highest intrinsic
          motivation Set the number 2 for the second highest intrinsic
          motivation Set the number 10 for the lowest intrinsic motivation
        </li>
        <li>
          Then the next 10 columns are the satisfaction of the intrinsic
          motivation in the current workplace. Set 1 if the intrinsic motivation
          is fulfilled Set 0 if the intrinsic motivation is indifferent Set -1
          if the intrinsic motivation is not fulfilled
        </li>
      </ul>
    </p>
    <p>
      Other columns will be interpreted as filter. You can then have your on
      custom filter.
      <br />
      For instance you can set the 4 following filters :
      <ul>
        <li>
          -> Set True for isOld if the person is ancient on the project, false
          otherelse -> Set the name of the team of the person
        </li>
        <li>
          -> Set True for isJunior if the person is junior on the tech, false
          otherelse
        </li>
        <li>
          -> Set True for isDev if the person is a developer, false otherelse.
        </li>
      </ul>
      Once your csv is ready, upload the file, and charts with the results will
      be computed.
      <br />
      Play with your personalized filters in order to have a clearer
      understanding of the health of your team.
    </p>
    <Link to="/upload">Get my team's health check</Link> <br />
    <Link to="/interview/tryit">Try it</Link>
  </article>
);

export default Home;
