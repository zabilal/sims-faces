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

const academics = {
    id: 'application',
    title: <FormattedMessage id="academics" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'chat',
            title: <FormattedMessage id="Classes" />,
            type: 'item',
            icon: icons.IconMessages,
            url: '/app/chat'
        },
        {
            id: 'kanban',
            title: 'Sections',
            type: 'item',
            icon: icons.IconLayoutKanban,
            url: '/app/kanban/board'
        },
        {
            id: 'mail',
            title: <FormattedMessage id="Subjects" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="Subject Groups" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendar,
            breadcrumbs: false
        },
        {
            id: 'kanban',
            title: 'Class Teachers',
            type: 'item',
            icon: icons.IconLayoutKanban,
            url: '/app/kanban/board'
        },
        {
            id: 'mail',
            title: <FormattedMessage id="Subject Teachers" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/app/mail'
        },
        {
            id: 'calendar',
            title: <FormattedMessage id="Promote Students" />,
            type: 'item',
            url: '/app/calendar',
            icon: icons.IconCalendar,
            breadcrumbs: false
        }
    ]
};

export default academics;
