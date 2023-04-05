import { Form as FormForwardRef } from "./components/FormRefs/FormForwardRef";
import { Form as FormUseImperative } from "./components/FormRefs/FormUseImperative";
import ResponsiveNavBar from "./components/ResponsiveNavBar/ResponsiveNavBar";
import Navbar from "./components/ResponsiveNavBarII/NavBar";
import RevealScroll from "./components/RevealScroll/RevealScroll";

function App() {
  return (
    <div>
      {/* <ResponsiveNavBar /> 
      <Navbar />
      <RevealScroll />*/}
      <FormForwardRef />
      <FormUseImperative />
    </div>
  );
}

export default App;
