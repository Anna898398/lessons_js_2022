import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./styles.css";

const App = () => (
  <Router>
    <div>
      <header>
        <Link className="page" to="/">Home</Link>
        <Link className="page" to="/about">About</Link>
        <Link className="page" to="/contact">Contact</Link>
      </header>

      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </main>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Welcome!</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
      fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
      sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
      amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
      incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
      minima veniam, quis nostrum exercitationem ullam corporis suscipit
      laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
      iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae
      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
    </p>
  </div>
);

const Contact = () => (
  <div>
    <h2>Contact</h2>
    <p>E-mail: it-step-frontend@bweb.ru</p>
    <p>Телефон: +7 (491) 288-88-88</p>
    <p>Paris, 7777 Marne-la-Vallée</p>
    <p>© 2021-2022 Corporation «It-step-frontend-22»</p>
  </div>
);

render(<App />, document.getElementById("root"));
