import Router from "./routes/Router";
import { GlobalState } from "./contexts/GLobalState";

export default function App() {

  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}
