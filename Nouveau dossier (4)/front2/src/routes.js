/*!

=========================================================
* Black Dashboard React v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/AfficheMateriels";
import AjoutMateriels from "views/AjoutMateriels";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
import AfficheMateriels from "views/AfficheMateriels";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/AfficheMateriels",
    name: "Inventaire des Materiels",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <AfficheMateriels />,
    layout: "/admin",
  },
  {
    path: "/AjoutMateriels",
    name: "Entrée de materiel",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    component: <AjoutMateriels/>,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Sortie des materiels",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Suivi des mouvements",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
  
  {
    path: "/tables",
    name: "Gestion des utilisateurs",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Besoins",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "securité",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: <Typography />,
    layout: "/admin",
  },  
];
export default routes;
