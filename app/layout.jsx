import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
("@components/Provider");

export const metadta = {
  title: "Promptopia",
  description: "Discover & Share AI Prompt",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
