Project Structure (frontend_app)
- public/
  - favicon.svg
  - robots.txt
- src/
  - assets/
    - logos/
    - icons/
    - styles/
      - variables.css
      - global.css
      - theme.css
  - components/
    - common/ (Button, Card, Loader, ErrorBoundary)
    - layout/ (TopNav, Sidebar, Footer, AppShell)
  - pages/
    - Landing, Dashboard, Profile, Auth (Login, Register, ResetPassword)
  - routes/ (index, ProtectedRoute placeholders)
  - hooks/ (useAuth, useTheme, useResponsive)
  - context/ (AuthContext, ThemeContext)
  - services/ (apiClient, authService, userService, costService)
  - store/ (index, slices)
  - utils/ (constants, storage, formatters)
  - config/ (env, theme)
  - test/ (setupTests, mocks)
  - index.css (imports globals)

Entry points:
- index.html -> src/main.jsx -> src/App.jsx
Providers:
- App.jsx wraps ThemeProvider and AuthProvider
