import useAuth from 'hooks/useAuth';
import { lazy, Suspense } from 'react';
import { Navigate, useLocation, useRoutes } from 'react-router-dom';

// layouts
import DashboardLayout from '../layouts/dashboard';
import LogoOnlyLayout from '../layouts/LogoOnlyLayout';
import MainLayout from '../layouts/main';
// guards
import AuthGuard from '../guards/AuthGuard';
import GuestGuard from '../guards/GuestGuard';
// import RoleBasedGuard from '../guards/RoleBasedGuard';
// components
import LoadingScreen from '../components/LoadingScreen';

// ----------------------------------------------------------------------

const Loadable = (Component: any) => (props: any) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <Suspense
      fallback={
        <LoadingScreen
          sx={{
            ...(!isDashboard && {
              top: 0,
              left: 0,
              width: 1,
              zIndex: 9999,
              position: 'fixed'
            })
          }}
        />
      }
    >
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  const { user } = useAuth();
  const roleId = user?.userInfo?.role?.roleId || null;

  const handleRenderRoute = () => {
    if (roleId === '1') {
      return [
        {
          path: 'user',
          children: [
            { path: '/', element: <Navigate to="/dashboard/user/list" replace /> },
            // { path: 'profile', element: <UserProfile /> },
            { path: 'cards', element: <UserCards /> },
            { path: 'list', element: <AdminUserList /> },
            { path: 'new', element: <AdminUserCreate /> },
            { path: '/:name/edit', element: <AdminUserCreate /> },
            { path: 'account', element: <UserAccount /> }
          ]
        }
      ];
    }
    if (roleId === '2') {
      return [
        {
          path: 'staff',
          children: [
            { path: '/', element: <Navigate to="/dashboard/staff1/list" replace /> },
            { path: 'list', element: <OwnerRequestList /> }
          ]
        },
        {
          path: 'package',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/package/list" replace />
            },
            { path: 'list', element: <PackageManagement /> },
            { path: '/:name/edit', element: <PackageManagementCreate /> },
            { path: 'new', element: <PackageManagementCreate /> }
          ]
        },
        {
          path: 'team',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/team/list" replace />
            },
            { path: 'list', element: <TeamManagement /> },
            { path: '/:name/edit', element: <TeamManagementCreate /> },
            { path: 'new', element: <TeamManagementCreate /> }
          ]
        },
        {
          path: 'bracket',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/bracket/list" replace />
            },
            { path: 'list', element: <BracketManagement /> },
            { path: '/:name/edit', element: <BracketManagementCreate /> },
            { path: 'new', element: <BracketManagementCreate /> }
          ]
        },
        {
          path: 'contract',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/contract/list" replace />
            },
            { path: 'list', element: <ContractManagement /> },
            { path: '/:name/edit', element: <ContractManagementCreate /> },
            { path: 'new', element: <ContractManagementCreate /> }
          ]
        },
        {
          path: 'promotion',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/promotion/list" replace />
            },
            { path: 'list', element: <PromotionManagementList /> },
            { path: '/:name/edit', element: <PromotionManagementCreate /> },
            { path: 'new', element: <PromotionManagementCreate /> }
          ]
        },
        {
          path: 'feedback',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/feedback/list" replace />
            },
            { path: 'list', element: <FeedbackManagementList /> }
          ]
        },
        {
          path: 'payment',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/payment/list" replace />
            },
            { path: 'list', element: <PaymentManagementList /> }
          ]
        },
        {
          path: 'admin-warranty',
          children: [
            { path: '/', element: <Navigate to="/dashboard/admin-warranty/list" replace /> },
            { path: 'list', element: <AdminWarrantyManagement /> }
          ]
        },
        {
          path: 'product',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/product/list" replace />
            },
            { path: 'list', element: <ProductManagement /> },
            { path: '/:name/edit', element: <ProductManagementCreate /> },
            { path: 'new', element: <ProductManagementCreate /> }
          ]
        }
      ];
    }
    if (roleId === '3') {
      return [
        {
          path: 'request',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/request/list" replace />
            },
            { path: 'list', element: <StaffRequestList /> }
          ]
        },
        {
          path: 'survey',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/survey/list" replace />
            },
            { path: 'list', element: <SurveyManagement /> },
            { path: '/:name/edit', element: <SurveyManagementCreate /> },
            { path: 'new', element: <SurveyManagementCreate /> }
          ]
        },
        {
          path: 'warranty',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/warranty/list" replace />
            },
            { path: 'list', element: <StaffWarrantyManagement /> },
            { path: '/:name/edit', element: <WarrantyManagementCreate /> }
          ]
        },
        {
          path: 'staff',
          children: [
            {
              path: '/',
              element: <Navigate to="/dashboard/staff/contract/list" replace />
            },
            { path: 'contract/list', element: <StaffContractManagement /> },
            { path: '/contract/:name/edit', element: <ContractManagementCreate /> },
            { path: 'contract/new', element: <ContractManagementCreate /> }
          ]
        }
      ];
    }
    if (roleId === '5') {
      return [
        {
          path: 'support',
          children: [
            { path: '/', element: <Support /> },
            { path: 'new', element: <Support /> },
            { path: ':conversationKey', element: <Support /> }
          ]
        }
      ];
    }
    return [];
  };

  return useRoutes([
    {
      path: 'auth',
      children: [
        {
          path: 'login',
          element: (
            <GuestGuard>
              <Login />
            </GuestGuard>
          )
        },
        {
          path: 'register',
          element: (
            <GuestGuard>
              <Register />
            </GuestGuard>
          )
        },
        { path: 'login-unprotected', element: <Login /> },
        { path: 'register-unprotected', element: <Register /> },
        { path: 'reset-password', element: <ResetPassword /> },
        { path: 'verify', element: <VerifyCode /> }
      ]
    },
    // Dashboard Routes
    {
      path: 'dashboard',
      element: (
        <AuthGuard>
          <DashboardLayout />
        </AuthGuard>
      ),
      children: [
        { path: '/', element: <Navigate to="/dashboard/intro" replace /> },
        {
          path: 'intro',
          children: [{ path: '/', element: <PageIntro /> }]
        },
        ...handleRenderRoute()
      ]
    },
    // Main Routes
    {
      path: '*',
      element: <LogoOnlyLayout />,
      children: [
        { path: 'coming-soon', element: <ComingSoon /> },
        { path: 'maintenance', element: <Maintenance /> },
        { path: 'pricing', element: <Pricing /> },
        { path: 'payment', element: <Payment /> },
        { path: '500', element: <Page500 /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> }
      ]
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { path: '/', element: <Navigate to="/dashboard/intro" replace /> },
        { path: 'about-us', element: <About /> },
        { path: 'contact-us', element: <Contact /> },
        { path: 'faqs', element: <Faqs /> },
        {
          path: 'components',
          children: [
            { path: '/', element: <ComponentsOverview /> },
            // FOUNDATIONS
            { path: 'color', element: <Color /> },
            { path: 'typography', element: <Typography /> },
            { path: 'shadows', element: <Shadows /> },
            { path: 'grid', element: <Grid /> },
            { path: 'icons', element: <Icons /> },
            // MATERIAL UI
            { path: 'accordion', element: <Accordion /> },
            { path: 'alert', element: <Alert /> },
            { path: 'autocomplete', element: <Autocomplete /> },
            { path: 'avatar', element: <Avatar /> },
            { path: 'badge', element: <Badge /> },
            { path: 'breadcrumbs', element: <Breadcrumb /> },
            { path: 'buttons', element: <Buttons /> },
            { path: 'checkbox', element: <Checkbox /> },
            { path: 'chip', element: <Chip /> },
            { path: 'dialog', element: <Dialog /> },
            { path: 'label', element: <Label /> },
            { path: 'list', element: <List /> },
            { path: 'menu', element: <Menu /> },
            { path: 'pagination', element: <Pagination /> },
            { path: 'pickers', element: <Pickers /> },
            { path: 'popover', element: <Popover /> },
            { path: 'progress', element: <Progress /> },
            { path: 'radio-button', element: <RadioButtons /> },
            { path: 'rating', element: <Rating /> },
            { path: 'slider', element: <Slider /> },
            { path: 'snackbar', element: <Snackbar /> },
            { path: 'stepper', element: <Stepper /> },
            { path: 'switch', element: <Switches /> },
            { path: 'table', element: <Table /> },
            { path: 'tabs', element: <Tabs /> },
            { path: 'textfield', element: <Textfield /> },
            { path: 'timeline', element: <Timeline /> },
            { path: 'tooltip', element: <Tooltip /> },
            { path: 'transfer-list', element: <TransferList /> },
            { path: 'tree-view', element: <TreeView /> },
            { path: 'data-grid', element: <DataGrid /> },
            // EXTRA COMPONENTS
            { path: 'chart', element: <Charts /> },
            { path: 'map', element: <Map /> },
            { path: 'editor', element: <Editor /> },
            { path: 'copy-to-clipboard', element: <CopyToClipboard /> },
            { path: 'upload', element: <Upload /> },
            { path: 'carousel', element: <Carousel /> },
            { path: 'multi-language', element: <MultiLanguage /> },
            { path: 'animate', element: <Animate /> },
            { path: 'mega-menu', element: <MegaMenu /> }
          ]
        }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}

// IMPORT COMPONENTS

// Authentication
const Login = Loadable(lazy(() => import('../pages/authentication/Login')));
const Register = Loadable(lazy(() => import('../pages/authentication/Register')));
const ResetPassword = Loadable(lazy(() => import('../pages/authentication/ResetPassword')));
const VerifyCode = Loadable(lazy(() => import('../pages/authentication/VerifyCode')));
// Dashboard
const GeneralApp = Loadable(lazy(() => import('../pages/dashboard/GeneralApp')));
const ContractManagement = Loadable(lazy(() => import('../pages/dashboard/ContractManagement')));
const StaffContractManagement = Loadable(
  lazy(() => import('../pages/dashboard/StaffContractManagement'))
);
const ContractManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/ContractManagementCreate'))
);
const GeneralEcommerce = Loadable(lazy(() => import('../pages/dashboard/GeneralEcommerce')));
const GeneralAnalytics = Loadable(lazy(() => import('../pages/dashboard/GeneralAnalytics')));
const EcommerceShop = Loadable(lazy(() => import('../pages/dashboard/EcommerceShop')));
const EcommerceProductDetails = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductDetails'))
);
const EcommerceProductList = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductList'))
);
const EcommerceProductCreate = Loadable(
  lazy(() => import('../pages/dashboard/EcommerceProductCreate'))
);
const EcommerceCheckout = Loadable(lazy(() => import('../pages/dashboard/EcommerceCheckout')));
const EcommerceInvoice = Loadable(lazy(() => import('../pages/dashboard/EcommerceInvoice')));
const BlogPosts = Loadable(lazy(() => import('../pages/dashboard/BlogPosts')));
const BlogPost = Loadable(lazy(() => import('../pages/dashboard/BlogPost')));
const BlogNewPost = Loadable(lazy(() => import('../pages/dashboard/BlogNewPost')));
const UserProfile = Loadable(lazy(() => import('../pages/dashboard/UserProfile')));
const UserCards = Loadable(lazy(() => import('../pages/dashboard/UserCards')));
const AdminUserList = Loadable(lazy(() => import('../pages/dashboard/AdminUserManagement')));
const OwnerRequestList = Loadable(lazy(() => import('../pages/dashboard/OwnerRequestList')));
const PromotionManagementList = Loadable(
  lazy(() => import('../pages/dashboard/PromotionManagement'))
);
const FeedbackManagementList = Loadable(
  lazy(() => import('../pages/dashboard/FeedbackManagement'))
);
const AdminWarrantyManagement = Loadable(
  lazy(() => import('../pages/dashboard/AdminWarrantyManagement'))
);
const PaymentManagementList = Loadable(lazy(() => import('../pages/dashboard/PaymentManagement')));
const StaffRequestList = Loadable(lazy(() => import('../pages/dashboard/StaffRequestList')));
const PackageManagement = Loadable(lazy(() => import('../pages/dashboard/PackageManagement')));
const UserAccount = Loadable(lazy(() => import('../pages/dashboard/UserAccount')));
const AdminUserCreate = Loadable(lazy(() => import('../pages/dashboard/AdminUserCreate')));
const PromotionManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/PromotionManagementCreate'))
);
const PackageManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/PackageManagementCreate'))
);
const ProductManagement = Loadable(lazy(() => import('../pages/dashboard/ProductManagement')));
const BracketManagement = Loadable(lazy(() => import('../pages/dashboard/BracketManagement')));
const StaffWarrantyManagement = Loadable(
  lazy(() => import('../pages/dashboard/StaffWarrantyManagement'))
);
const WarrantyManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/WarrantyManagementCreate'))
);
const TeamManagement = Loadable(lazy(() => import('../pages/dashboard/TeamManagement')));
const ProductManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/ProductManagementCreate'))
);
const SurveyManagement = Loadable(lazy(() => import('../pages/dashboard/SurveyManagement')));
const SurveyManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/SurveyManagementCreate'))
);
const BracketManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/BracketManagementCreate'))
);
const TeamManagementCreate = Loadable(
  lazy(() => import('../pages/dashboard/TeamManagementCreate'))
);
const Chat = Loadable(lazy(() => import('../pages/dashboard/Chat')));
const Support = Loadable(lazy(() => import('../pages/dashboard/Support')));
const Mail = Loadable(lazy(() => import('../pages/dashboard/Mail')));
const Calendar = Loadable(lazy(() => import('../pages/dashboard/Calendar')));
const Kanban = Loadable(lazy(() => import('../pages/dashboard/Kanban')));
// Main
const LandingPage = Loadable(lazy(() => import('../pages/LandingPage')));
const About = Loadable(lazy(() => import('../pages/About')));
const Contact = Loadable(lazy(() => import('../pages/Contact')));
const Faqs = Loadable(lazy(() => import('../pages/Faqs')));
const ComingSoon = Loadable(lazy(() => import('../pages/ComingSoon')));
const Maintenance = Loadable(lazy(() => import('../pages/Maintenance')));
const Pricing = Loadable(lazy(() => import('../pages/Pricing')));
const Payment = Loadable(lazy(() => import('../pages/Payment')));
const Page500 = Loadable(lazy(() => import('../pages/Page500')));
const NotFound = Loadable(lazy(() => import('../pages/Page404')));
const PageIntro = Loadable(lazy(() => import('../pages/PageIntro')));
// Components
const ComponentsOverview = Loadable(lazy(() => import('../pages/ComponentsOverview')));
const Color = Loadable(
  lazy(() => import('../pages/components-overview/foundations/FoundationColors'))
);
const Typography = Loadable(
  lazy(() => import('../pages/components-overview/foundations/FoundationTypography'))
);
const Shadows = Loadable(
  lazy(() => import('../pages/components-overview/foundations/FoundationShadows'))
);
const Grid = Loadable(
  lazy(() => import('../pages/components-overview/foundations/FoundationGrid'))
);
const Icons = Loadable(
  lazy(() => import('../pages/components-overview/foundations/FoundationIcons'))
);
const Accordion = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/Accordion'))
);
const Alert = Loadable(lazy(() => import('../pages/components-overview/material-ui/Alert')));
const Autocomplete = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/Autocomplete'))
);
const Avatar = Loadable(lazy(() => import('../pages/components-overview/material-ui/Avatar')));
const Badge = Loadable(lazy(() => import('../pages/components-overview/material-ui/Badge')));
const Breadcrumb = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/Breadcrumb'))
);
const Buttons = Loadable(lazy(() => import('../pages/components-overview/material-ui/buttons')));
const Checkbox = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/Checkboxes'))
);

const Chip = Loadable(lazy(() => import('../pages/components-overview/material-ui/chips')));
const Dialog = Loadable(lazy(() => import('../pages/components-overview/material-ui/dialog')));
const Label = Loadable(lazy(() => import('../pages/components-overview/material-ui/Label')));
const List = Loadable(lazy(() => import('../pages/components-overview/material-ui/Lists')));
const Menu = Loadable(lazy(() => import('../pages/components-overview/material-ui/Menus')));
const Pagination = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/Pagination'))
);
const Pickers = Loadable(lazy(() => import('../pages/components-overview/material-ui/pickers')));
const Popover = Loadable(lazy(() => import('../pages/components-overview/material-ui/Popover')));
const Progress = Loadable(lazy(() => import('../pages/components-overview/material-ui/progress')));
const RadioButtons = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/RadioButtons'))
);
const Rating = Loadable(lazy(() => import('../pages/components-overview/material-ui/Rating')));
const Slider = Loadable(lazy(() => import('../pages/components-overview/material-ui/Slider')));
const Snackbar = Loadable(lazy(() => import('../pages/components-overview/material-ui/Snackbar')));
const Stepper = Loadable(lazy(() => import('../pages/components-overview/material-ui/stepper')));
const Switches = Loadable(lazy(() => import('../pages/components-overview/material-ui/Switches')));
const Table = Loadable(lazy(() => import('../pages/components-overview/material-ui/table')));
const Tabs = Loadable(lazy(() => import('../pages/components-overview/material-ui/Tabs')));
const Textfield = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/textfield'))
);
const Timeline = Loadable(lazy(() => import('../pages/components-overview/material-ui/Timeline')));
const Tooltip = Loadable(lazy(() => import('../pages/components-overview/material-ui/Tooltip')));
const TransferList = Loadable(
  lazy(() => import('../pages/components-overview/material-ui/transfer-list'))
);
const TreeView = Loadable(lazy(() => import('../pages/components-overview/material-ui/TreeView')));
const DataGrid = Loadable(lazy(() => import('../pages/components-overview/material-ui/data-grid')));
//
const Charts = Loadable(lazy(() => import('../pages/components-overview/extra/Charts')));
const Map = Loadable(lazy(() => import('../pages/components-overview/extra/Map')));
const Editor = Loadable(lazy(() => import('../pages/components-overview/extra/Editor')));
const CopyToClipboard = Loadable(
  lazy(() => import('../pages/components-overview/extra/CopyToClipboard'))
);
const Upload = Loadable(lazy(() => import('../pages/components-overview/extra/Upload')));
const Carousel = Loadable(lazy(() => import('../pages/components-overview/extra/Carousel')));
const MultiLanguage = Loadable(
  lazy(() => import('../pages/components-overview/extra/MultiLanguage'))
);
const Animate = Loadable(lazy(() => import('../pages/components-overview/extra/animate')));
const MegaMenu = Loadable(lazy(() => import('../pages/components-overview/extra/MegaMenu')));
