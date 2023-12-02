import { BrowserRouter, Route, Routes } from "react-router-dom";
// layouts
import RootLayout from "./Layouts/RootLayout";
import AppLayout from "./Layouts/AppLayout";
// middle routes
import ProtectedRoute from "./features/ProtectedRoute";
import UnProtectedRoute from "./features/UnProtectedRoute";
// routes
import RootRoute from "./routes/RootRoute";
import AddRoute from "./routes/AddRoute";
import SearchRoute from "./routes/SearchRoute";
import SettingsRoute from "./routes/SettingsRoute";
import ProfileRoute from "./routes/ProfileRoute";
import RegisterRoute from "./routes/RegisterRoute";

export default function App() {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<RootRoute />} />
            <Route path="/search" element={<SearchRoute />} />
            <Route path="/add" element={<AddRoute />} />
            <Route path="/settings" element={<SettingsRoute />} />
            <Route path="/profile" element={<ProfileRoute />} />
            {/* <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route> */}
          </Route>
          <Route
            path="/register"
            element={
              <UnProtectedRoute>
                <RegisterRoute />
              </UnProtectedRoute>
            }
          />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}
