import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import UserLogin from './pages/user-login';
import PortfolioCreationWizard from './pages/portfolio-creation-wizard';
import PortfolioDashboard from './pages/portfolio-dashboard';
import AccountSettings from './pages/account-settings';
import TemplateGallery from './pages/template-gallery';
import UserRegistration from './pages/user-registration';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AccountSettings />} />
        <Route path="/user-login" element={<UserLogin />} />
        <Route path="/portfolio-creation-wizard" element={<PortfolioCreationWizard />} />
        <Route path="/portfolio-dashboard" element={<PortfolioDashboard />} />
        <Route path="/account-settings" element={<AccountSettings />} />
        <Route path="/template-gallery" element={<TemplateGallery />} />
        <Route path="/user-registration" element={<UserRegistration />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
