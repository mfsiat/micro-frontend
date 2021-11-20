import Footer from 'home/Footer';
import Header from 'home/Header';
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";

const Header = React.lazy(() => import ("home/Header"));


const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Suspense>
    <Header />
    </Suspense>
    <div className="my-10">
      PDP Page
    </div>
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
