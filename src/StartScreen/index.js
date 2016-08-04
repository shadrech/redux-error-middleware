import React, {Component} from 'react';

export default class StartScreen extends Component {
  constructor(props) {
    super(props);
    document.title = 'Local';
  }

  render() {
    return (
      <div>
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Redux Error Middleware Sandbox</span>
          </div>
        </header>
      </div>
    );
  }
}
