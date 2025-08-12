const sidebarMenu = [
  {
    title: 'menu.dashboard',
    children: [
      {
        icon: 'HomeTrendUp',
        title: 'menu.dashboard',
        type: 'item',
        url: '/dashboard'
      },
      {
        icon: 'Menu',
        title: 'menu.myTasks',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.tasksList',
            url: '/tasks/'
          },
          {
            type: 'item',
            title: 'menu.addTask',
            url: '/tasks/add'
          }
        ]
      }
    ]
  },

  {
    title: 'menu.services',
    children: [
      {
        icon: 'Driver',
        title: 'menu.servicesResume',
        type: 'item',
        url: '/services/overview'
      },
      {
        icon: 'Add',
        title: 'menu.addServices',
        type: 'item',
        url: '/services/add'
      },
      {
        icon: 'Layer',
        title: 'menu.orders',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.ordersList',
            url: '/orders'
          },
          {
            type: 'item',
            title: 'menu.addOrder',
            url: '/orders/add'
          }
        ]
      },
      {
        icon: 'DocumentText1',
        title: 'menu.reports',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.reportsList',
            url: '/reports'
          },
          {
            type: 'item',
            title: 'menu.addReport',
            url: '/reports/add'
          }
        ]
      },
      {
        icon: 'Alarm',
        title: 'menu.alerts',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.alertsList',
            url: '/alerts'
          },
          {
            type: 'item',
            title: 'menu.addAlert',
            url: '/alerts/add'
          }
        ]
      },
    ]
  },

  {
    title: 'menu.billing',
    children: [
      {
        icon: 'DollarSquare',
        title: 'menu.billing',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.bills',
            url: '/billing'
          },
          {
            type: 'item',
            title: 'menu.addBill',
            url: '/billing/add'
          }
        ]
      }
    ]
  },

  {
    title: 'menu.customers',
    children: [
      {
        icon: 'UserSquare',
        title: 'menu.customers',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.customersList',
            url: '/customers'
          },
          {
            type: 'item',
            title: 'menu.addCustomer',
            url: '/customers/add'
          }
        ]
      },
    ]
  },

  {
    title: 'menu.users',
    children: [
      {
        icon: 'UserOctagon',
        title: 'menu.users',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.usersList',
            url: '/users'
          },
          {
            type: 'item',
            title: 'menu.adduser',
            url: '/users/add'
          },
          {
            type: 'item',
            title: 'menu.userOverview',
            url: '/users/overview'
          }
        ],
      },
    ]
  },

  {
    title: 'menu.settings',
    children: [
      {
        icon: 'Setting5',
        title: 'menu.settings',
        type: 'collapse',
        children: [
          {
            type: 'item',
            title: 'menu.settingsCompanyDetails',
            url: 'settings/company/details'
          },
          {
            type: 'item',
            title: 'menu.settingsAddCompanyDetails',
            url: 'settings/company/add'
          }
        ]
      },
    ]
  }
]

const colors = {
  mainColor: '#4680FF',
  textColor: '#5B6B79'
}

export const constants = {
  colors,
  sidebarMenu,
}

