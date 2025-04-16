import { createElement } from "react";

const App = () => {
    return createElement(
        "h1",
        { className: "greeting" },
        "Hello, this is a JSX Code!"
      );
    return (
        <h1 className="greeting">
            "Hello, this is a JSX Code!"
        </h1>
    );
};

export default App;