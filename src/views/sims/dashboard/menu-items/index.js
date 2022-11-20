import dashboard from './dashboard';
import widget from './widget';
import application from './application';
import forms from './forms';
import elements from './elements';
import pages from './pages';
import utilities from './utilities';
import support from './support';
import other from './other';
import adminMenus from './admin-menu-Items';
import studentInformation from './student-information';
import academics from './academics';
import humanResource from './human-resource';

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    items: [
        adminMenus,
        studentInformation,
        academics,
        humanResource,
        dashboard,
        widget,
        application,
        forms,
        elements,
        pages,
        utilities,
        support,
        other
    ]
};

export default menuItems;
