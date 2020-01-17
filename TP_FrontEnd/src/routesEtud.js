/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import TableAbsEtud from "views/TableAbsEtud.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const etudRoutes = [
  {
    path: "/edt",
    name: "Emploi du temps",
    icon:   "pe-7s-clock",
    component: TableAbsEtud,
  },
  {
    path: "/monprofil",
    name: "Mon profil",
    icon: "pe-7s-user",
    component: TableAbsEtud,
  },
  {
    path: "/mesabsences",
    name: "Mes absences",
    icon: "pe-7s-note2",
    component: TableAbsEtud,
    layout: "/admin"
  },
  {
    path: "/mesmodules",
    name: "Mes modules",
    icon: "pe-7s-news-paper",
    component: TableAbsEtud,
  },
  
 
];

export default etudRoutes;
