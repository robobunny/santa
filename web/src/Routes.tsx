// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'
import MainLayout from './layouts/MainLayout/MainLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={MainLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="home" roles={["mom", "admin"]}>
          <Route path="/admin" page={AdminPage} name="admin" />
          <Set wrap={ScaffoldLayout} title="Users" titleTo="users" buttonLabel="New User" buttonTo="newUser">
            <Route path="/users/new" page={UserNewUserPage} name="newUser" />
            <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
            <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
            <Route path="/users" page={UserUsersPage} name="users" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Exchanges" titleTo="exchanges" buttonLabel="New Exchange" buttonTo="newExchange">
            <Route path="/exchanges/new" page={ExchangeNewExchangePage} name="newExchange" />
            <Route path="/exchanges/{id:Int}/edit" page={ExchangeEditExchangePage} name="editExchange" />
            <Route path="/exchanges/{id:Int}" page={ExchangeExchangePage} name="exchange" />
            <Route path="/exchanges" page={ExchangeExchangesPage} name="exchanges" />
          </Set>
          <Set wrap={ScaffoldLayout} title="Wishes" titleTo="wishes" buttonLabel="New Wish" buttonTo="newWish">
            <Route path="/wishes/new" page={WishNewWishPage} name="newWish" />
            <Route path="/wishes/{id:Int}/edit" page={WishEditWishPage} name="editWish" />
            <Route path="/wishes/{id:Int}" page={WishWishPage} name="wish" />
            <Route path="/wishes" page={WishWishesPage} name="wishes" />
          </Set>
        </Private>
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
