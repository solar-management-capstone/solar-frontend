// ----------------------------------------------------------------------

function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = '/auth';
const ROOTS_DASHBOARD = '/dashboard';

// ----------------------------------------------------------------------

export const PATH_AUTH = {
  root: ROOTS_AUTH,
  login: path(ROOTS_AUTH, '/login'),
  loginUnprotected: path(ROOTS_AUTH, '/login-unprotected'),
  register: path(ROOTS_AUTH, '/register'),
  registerUnprotected: path(ROOTS_AUTH, '/register-unprotected'),
  resetPassword: path(ROOTS_AUTH, '/reset-password'),
  verify: path(ROOTS_AUTH, '/verify')
};

export const PATH_PAGE = {
  comingSoon: '/coming-soon',
  maintenance: '/maintenance',
  pricing: '/pricing',
  payment: '/payment',
  about: '/about-us',
  contact: '/contact-us',
  faqs: '/faqs',
  page404: '/404',
  page500: '/500',
  components: '/components'
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  general: {
    promotionManagement: path(ROOTS_DASHBOARD, '/promotion'),
    packageManagement: path(ROOTS_DASHBOARD, '/package'),
    productManagement: path(ROOTS_DASHBOARD, '/product'),
    app: path(ROOTS_DASHBOARD, '/app'),
    ecommerce: path(ROOTS_DASHBOARD, '/ecommerce'),
    analytics: path(ROOTS_DASHBOARD, '/analytics')
  },
  adminWarranty: {
    root: path(ROOTS_DASHBOARD, '/admin-warranty'),
    list: path(ROOTS_DASHBOARD, '/admin-warranty/list')
  },
  warranty: {
    root: path(ROOTS_DASHBOARD, '/warranty'),
    list: path(ROOTS_DASHBOARD, '/warranty/list'),
    newWarranty: path(ROOTS_DASHBOARD, '/warranty/new'),
    editById: path(ROOTS_DASHBOARD, '/warranty/ada-lindgren/edit')
  },
  request: {
    root: path(ROOTS_DASHBOARD, '/request'),
    list: path(ROOTS_DASHBOARD, '/request/list')
  },
  survey: {
    root: path(ROOTS_DASHBOARD, '/survey'),
    list: path(ROOTS_DASHBOARD, '/survey/list'),
    newSurvey: path(ROOTS_DASHBOARD, '/survey/new'),
    editById: path(ROOTS_DASHBOARD, '/survey/ada-lindgren/edit')
  },
  feedback: {
    root: path(ROOTS_DASHBOARD, '/feedback'),
    list: path(ROOTS_DASHBOARD, '/feedback/list')
  },
  contract: {
    root: path(ROOTS_DASHBOARD, '/contract'),
    list: path(ROOTS_DASHBOARD, '/contract/list'),
    newContract: path(ROOTS_DASHBOARD, '/contract/new'),
    editById: path(ROOTS_DASHBOARD, '/contract/ada-lindgren/edit'),
    rootStaff: path(ROOTS_DASHBOARD, '/staff/contract'),
    listStaff: path(ROOTS_DASHBOARD, '/staff/contract/list'),
    newContractStaff: path(ROOTS_DASHBOARD, '/staff/contract/new'),
    editByIdStaff: path(ROOTS_DASHBOARD, '/staff/contract/ada-lindgren/edit')
  },
  staffContract: {
    root: path(ROOTS_DASHBOARD, '/staff/contract'),
    list: path(ROOTS_DASHBOARD, '/staff/contract/list'),
    newContract: path(ROOTS_DASHBOARD, '/staff/contract/new'),
    editById: path(ROOTS_DASHBOARD, '/staff/contract/ada-lindgren/edit')
  },
  bracket: {
    root: path(ROOTS_DASHBOARD, '/bracket'),
    list: path(ROOTS_DASHBOARD, '/bracket/list'),
    newBracket: path(ROOTS_DASHBOARD, '/bracket/new'),
    editById: path(ROOTS_DASHBOARD, '/bracket/ada-lindgren/edit')
  },
  team: {
    root: path(ROOTS_DASHBOARD, '/team'),
    list: path(ROOTS_DASHBOARD, '/team/list'),
    newBracket: path(ROOTS_DASHBOARD, '/team/new'),
    editById: path(ROOTS_DASHBOARD, '/team/ada-lindgren/edit')
  },
  payment: {
    root: path(ROOTS_DASHBOARD, '/payment'),
    list: path(ROOTS_DASHBOARD, '/payment/list')
  },
  staff: {
    root: path(ROOTS_DASHBOARD, '/staff'),
    list: path(ROOTS_DASHBOARD, '/staff/list')
  },
  promotion: {
    root: path(ROOTS_DASHBOARD, '/promotion'),
    list: path(ROOTS_DASHBOARD, '/promotion/list'),
    newPromotion: path(ROOTS_DASHBOARD, '/promotion/new'),
    editById: path(ROOTS_DASHBOARD, '/promotion/ada-lindgren/edit')
  },
  product: {
    root: path(ROOTS_DASHBOARD, '/product'),
    list: path(ROOTS_DASHBOARD, '/product/list'),
    newProduct: path(ROOTS_DASHBOARD, '/product/new'),
    editById: path(ROOTS_DASHBOARD, '/product/ada-lindgren/edit')
  },
  package: {
    root: path(ROOTS_DASHBOARD, '/package'),
    list: path(ROOTS_DASHBOARD, '/package/list'),
    newPackage: path(ROOTS_DASHBOARD, '/package/new'),
    editById: path(ROOTS_DASHBOARD, '/package/ada-lindgren/edit')
  },
  mail: {
    root: path(ROOTS_DASHBOARD, '/mail'),
    all: path(ROOTS_DASHBOARD, '/mail/all')
  },
  chat: {
    root: path(ROOTS_DASHBOARD, '/chat'),
    new: path(ROOTS_DASHBOARD, '/chat/new'),
    conversation: path(ROOTS_DASHBOARD, '/chat/:conversationKey')
  },
  support: {
    root: path(ROOTS_DASHBOARD, '/support')
  },
  calendar: path(ROOTS_DASHBOARD, '/calendar'),
  kanban: path(ROOTS_DASHBOARD, '/kanban'),
  user: {
    root: path(ROOTS_DASHBOARD, '/user'),
    cards: path(ROOTS_DASHBOARD, '/user/cards'),
    list: path(ROOTS_DASHBOARD, '/user/list'),
    newUser: path(ROOTS_DASHBOARD, '/user/new'),
    editById: path(ROOTS_DASHBOARD, '/user/ada-lindgren/edit'),
    account: path(ROOTS_DASHBOARD, '/user/account')
  },
  eCommerce: {
    root: path(ROOTS_DASHBOARD, '/e-commerce'),
    shop: path(ROOTS_DASHBOARD, '/e-commerce/shop'),
    product: path(ROOTS_DASHBOARD, '/e-commerce/product/:name'),
    productById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-air-force-1-ndestrukt'),
    list: path(ROOTS_DASHBOARD, '/e-commerce/list'),
    newProduct: path(ROOTS_DASHBOARD, '/e-commerce/product/new'),
    editById: path(ROOTS_DASHBOARD, '/e-commerce/product/nike-blazer-low-77-vintage/edit'),
    checkout: path(ROOTS_DASHBOARD, '/e-commerce/checkout'),
    invoice: path(ROOTS_DASHBOARD, '/e-commerce/invoice')
  },
  blog: {
    root: path(ROOTS_DASHBOARD, '/blog'),
    posts: path(ROOTS_DASHBOARD, '/blog/posts'),
    post: path(ROOTS_DASHBOARD, '/blog/post/:title'),
    postById: path(ROOTS_DASHBOARD, '/blog/post/portfolio-review-is-this-portfolio-too-creative'),
    newPost: path(ROOTS_DASHBOARD, '/blog/new-post')
  }
};

export const PATH_DOCS = 'https://docs-minimals.vercel.app/introduction';
