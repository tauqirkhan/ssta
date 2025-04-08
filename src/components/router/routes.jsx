import Home from "../home/home";
import Error from "../error/error";
import Courses from "../courses/courses";
import Team from "../team/team";
import Partners from "../partners/partners";
import Sectors from "../sectors/sectors";
import Contact from "../contact/contact";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/partners",
    element: <Partners />,
  },
  {
    path: "/sectors",
    element: <Sectors />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
];

export default routes;
