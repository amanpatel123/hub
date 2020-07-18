import ReactRailsUJS from "react_ujs";
console.log('Css Site pack loaded');

const componentRequireContext = require.context("cssSite", true);

ReactRailsUJS.useContext(componentRequireContext);