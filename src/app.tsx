import * as React from "react";
import * as ReactDOM from "react-dom";
import Word from './Word'
import {Helmet} from 'react-helmet';

ReactDOM.render(<div className="application">
<Helmet>
    <style>{'body { background-color: #09171E; }'}</style>
</Helmet>
<Word/>
</div>,
  document.getElementById("root")
);