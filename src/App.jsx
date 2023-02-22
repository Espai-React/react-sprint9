import ContextProvider from "./context/AppContext";
import Router from "./Router/Router";

const App = () => (
	<ContextProvider>
		<Router />
	</ContextProvider>
);

export default App;
