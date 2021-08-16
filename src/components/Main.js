import Actions from "./Main/Actions";
import Content from "./Main/Content";
import EmailTitle from "./Main/EmailTitle";
import ToolBar from "./Main/ToolBar";
import EmailHeader from "./Main/EmailHeader";

function Main() {
    return (
        <main className="email-view">
            <ToolBar/>
        <article className="email-content">
          <EmailTitle/>
          <EmailHeader/>
          <Content/>
          <Actions/>
        </article>
      </main>
    )   
}

export default Main