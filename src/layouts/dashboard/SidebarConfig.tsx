// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// components
import Label from '../../components/Label';
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  kanban: getIcon('ic_kanban')
};

// const sidebarConfig = [
//   // GENERAL
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'general',
//     items: [
//       {
//         title: 'Quản lý hợp đồng',
//         path: PATH_DASHBOARD.general.contractManagement,
//         icon: ICONS.dashboard
//       },
//       {
//         title: 'app',
//         path: PATH_DASHBOARD.general.app,
//         icon: ICONS.dashboard
//       },
//       { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
//       { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics }
//     ]
//   },

//   // MANAGEMENT
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'management',
//     items: [
//       // MANAGEMENT : USER
//       {
//         title: 'user',
//         path: PATH_DASHBOARD.user.root,
//         icon: ICONS.user,
//         children: [
//           { title: 'profile', path: PATH_DASHBOARD.user.profile },
//           { title: 'cards', path: PATH_DASHBOARD.user.cards },
//           { title: 'list', path: PATH_DASHBOARD.user.list },
//           { title: 'create', path: PATH_DASHBOARD.user.newUser },
//           { title: 'edit', path: PATH_DASHBOARD.user.editById },
//           { title: 'account', path: PATH_DASHBOARD.user.account }
//         ]
//       },

//       // MANAGEMENT : E-COMMERCE
//       {
//         title: 'e-commerce',
//         path: PATH_DASHBOARD.eCommerce.root,
//         icon: ICONS.cart,
//         children: [
//           { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
//           { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
//           { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
//           { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
//           { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
//           { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
//           { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice }
//         ]
//       },

//       // MANAGEMENT : BLOG
//       {
//         title: 'blog',
//         path: PATH_DASHBOARD.blog.root,
//         icon: ICONS.blog,
//         children: [
//           { title: 'posts', path: PATH_DASHBOARD.blog.posts },
//           { title: 'post', path: PATH_DASHBOARD.blog.postById },
//           { title: 'new post', path: PATH_DASHBOARD.blog.newPost }
//         ]
//       }
//     ]
//   },

//   // APP
//   // ----------------------------------------------------------------------
//   {
//     subheader: 'app',
//     items: [
//       {
//         title: 'mail',
//         path: PATH_DASHBOARD.mail.root,
//         icon: ICONS.mail,
//         info: <Label color="error">2</Label>
//       },
//       { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
//       { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
//       {
//         title: 'kanban',
//         path: PATH_DASHBOARD.kanban,
//         icon: ICONS.kanban
//       }
//     ]
//   }
// ];

const adminSidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Quản lí',
    items: [
      // MANAGEMENT : USER
      {
        title: 'Tài khoản',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'list', path: PATH_DASHBOARD.user.list },
          { title: 'create', path: PATH_DASHBOARD.user.newUser }
        ]
      }
    ]
  }
];

const ownerSidebarConfig = [
  {
    subheader: 'Phê duyệt',
    items: [
      {
        title: 'Nhân viên',
        path: PATH_DASHBOARD.staff.list,
        icon: ICONS.user
      },
      {
        title: 'Thống kê Hợp đồng',
        path: PATH_DASHBOARD.contract.list,
        icon: ICONS.dashboard
      },
      {
        title: 'Feebacks',
        path: PATH_DASHBOARD.feedback.list,
        icon: ICONS.kanban
      }
    ]
  },
  {
    subheader: 'Quản lí',
    items: [
      {
        title: 'Mã khuyến mãi',
        path: PATH_DASHBOARD.promotion.root,
        icon: ICONS.mail,
        children: [
          { title: 'Danh sách khuyến mãi', path: PATH_DASHBOARD.promotion.list },
          { title: 'Tạo khuyến mãi', path: PATH_DASHBOARD.promotion.newPromotion }
        ]
      },
      {
        title: 'Gói sản phẩm',
        path: PATH_DASHBOARD.package.root,
        icon: ICONS.ecommerce,
        children: [
          { title: 'Danh sách gói', path: PATH_DASHBOARD.package.list },
          { title: 'Tạo gói sản phẩm', path: PATH_DASHBOARD.package.newPackage }
        ]
      },
      {
        title: 'Sản phẩm',
        path: PATH_DASHBOARD.product.root,
        icon: ICONS.cart,
        children: [
          { title: 'Danh sách sản phẩm', path: PATH_DASHBOARD.product.list },
          { title: 'Tạo sản phẩm', path: PATH_DASHBOARD.product.newProduct }
        ]
      }
    ]
  },
  {
    subheader: 'Phụ kiện',
    items: [
      {
        title: 'Khung đỡ',
        path: PATH_DASHBOARD.bracket.root,
        icon: ICONS.ecommerce,
        children: [
          { title: 'Danh sách khung đỡ', path: PATH_DASHBOARD.bracket.list },
          { title: 'Thêm khung đỡ', path: PATH_DASHBOARD.bracket.newBracket }
        ]
      }
    ]
  }
];

const staffSidebarConfig = [
  // GENERAL
  // ----------------------------------------------------------------------
  {
    subheader: 'Quản lí',
    items: [
      {
        title: 'Tài khoản',
        path: PATH_DASHBOARD.user.root,
        icon: ICONS.user,
        children: [
          { title: 'Danh sách tài khoản', path: PATH_DASHBOARD.user.list },
          { title: 'create', path: PATH_DASHBOARD.user.newUser }
        ]
      },
      {
        title: 'Mã khuyến mãi',
        path: PATH_DASHBOARD.promotion.root,
        icon: ICONS.mail,
        children: [
          { title: 'Danh sách mã khuyến mãi', path: PATH_DASHBOARD.promotion.list },
          { title: 'Tạo khuyến mãi', path: PATH_DASHBOARD.promotion.newPromotion }
        ]
      },
      {
        title: 'Gói',
        path: PATH_DASHBOARD.package.root,
        icon: ICONS.dashboard,
        children: [
          { title: 'Danh sách gói', path: PATH_DASHBOARD.package.list },
          { title: 'Tạo gói', path: PATH_DASHBOARD.package.newPackage }
        ]
      },
      {
        title: 'Sản phẩm',
        path: PATH_DASHBOARD.product.root,
        icon: ICONS.dashboard,
        children: [
          { title: 'Danh sách sản phẩm', path: PATH_DASHBOARD.product.list },
          { title: 'Tạo sản phẩm', path: PATH_DASHBOARD.product.newProduct }
        ]
      }
    ]
  }
];

export { adminSidebarConfig, ownerSidebarConfig };
