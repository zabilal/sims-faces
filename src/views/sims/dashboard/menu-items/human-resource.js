// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconApps, IconUserCheck, IconBasket, IconMessages, IconLayoutKanban, IconMail, IconCalendar, IconNfc } from '@tabler/icons';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc
};

// ==============================|| APPLICATION MENU ITEMS ||============================== //

const humanResource = {
    id: 'application',
    title: <FormattedMessage id="student information" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'chat',
            title: <FormattedMessage id="Staff Directory" />,
            type: 'item',
            icon: icons.IconMessages,
            url: '/app/chat'
        },
        {
            id: 'kanban',
            title: 'Departments',
            type: 'item',
            icon: icons.IconLayoutKanban,
            url: '/app/kanban/board'
        },
        {
            id: 'mail',
            title: <FormattedMessage id="Designation" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="Staff Attendance" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendar,
            breadcrumbs: false
        }
    ]
};

export default humanResource;
