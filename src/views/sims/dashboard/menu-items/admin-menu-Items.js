// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconDashboard, IconDeviceAnalytics } from '@tabler/icons';

// constant
const icons = {
    IconDashboard,
    IconDeviceAnalytics
};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const adminMenus = {
    id: 'dashboard',
    title: <FormattedMessage id="Admin Dashboard" />,
    icon: icons.IconDashboard,
    type: 'group',
    children: [
        {
            id: 'default',
            title: <FormattedMessage id="home" />,
            type: 'item',
            url: '/dashboard/default',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default adminMenus;
