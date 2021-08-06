import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import PrivateRoute from "./private/PrivateRoute";
//import PrivateEditorRoute from "./private/PrivateEditorRoute";
import PrivateReviewerRoute from "./private/PrivateReviewerRoute";
//import PrivateResearcherRoute from "./private/PrivateResearcherRoute";
//import PrivatePresenterRoute from "./private/PrivatePresenterRoute";
//import PrivateAttendeeRoute from "./private/PrivateAttendeeRoute";

import Navbar from "../components/nav/Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Editor from "../pages/Editor.dashboard";
import Researcher from "../pages/Researcher";
import Attendee from "../pages/Attendee";
import Presenter from "../pages/Presenter";
import ReviewerDashboard from "../pages/Reviewer/Reviewer";
import ResearchContainer from "../pages/Reviewer/ResearchContainer";
import ResearchPaper from "../pages/Reviewer/ResearchPaper";
import WorkshopContainer from "../pages/Reviewer/WorkshopContainer";
import WorkshopProposal from "../pages/Reviewer/WorkshopProposal";
import ResearcherCard from "./reviewerDashboard/container/ReasearchContainer";
import WorkshopCard from "./reviewerDashboard/container/WorkshopContainer";
import Download from "../pages/Download";
import Workshop from "../pages/Workshop";
import Payment from "./ResearcherPayment/payment";

import Publication from "../pages/Publication";
import EventForm from "./common/EventForm";
const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<PrivateRoute exact path="/workshops">
					<Workshop />
				</PrivateRoute>
				<PrivateRoute exact path="/publications">
					<Publication />
				</PrivateRoute>
				<Route exact path="/downloads">
					<Download />
				</Route>
				<Route exact path="/about">
					<About />
				</Route>
				<PrivateRoute exact path="/blogs">
					<About />
				</PrivateRoute>
				<Route exact path="/auth/register">
					<Register />
				</Route>
				<Route exact path="/auth/login">
					<Login />
				</Route>
				
				<PrivateRoute exact path="/auth/user/editor/dashboard">
					<Editor />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/researcher/dashboard">
					<Researcher />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/researcher/publication/pay/:id">
					<Payment />
				</PrivateRoute>

				<PrivateRoute exact path="/auth/user/presenter/dashboard">
					<Presenter />
				</PrivateRoute>
				<PrivateRoute exact path="/auth/user/attendee/dashboard">
					<Attendee />
				</PrivateRoute>
				<PrivateRoute exact path="/workshop/create">
					<EventForm title="Workshop" />
				</PrivateRoute>
				<PrivateRoute exact path="/publication/create">
					<EventForm title="Publication" />
				</PrivateRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/dashboard">
					<ReviewerDashboard/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/reasearch/card">
					<ResearchContainer/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/workshop/card">
					<WorkshopContainer/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/research">
					<ResearchPaper/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/workshop">
					<WorkshopProposal/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/research/card/:id">
					<ResearcherCard/>
				</PrivateReviewerRoute>
				<PrivateReviewerRoute exact path="/auth/user/reviewer/workshop/card/:id">
					<WorkshopCard/>
				</PrivateReviewerRoute>


				

				
			</Switch>
		</Router>
	);
};

export default App;

