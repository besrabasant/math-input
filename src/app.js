const React = require('react');
const ReactDOM = require('react-dom');

const App = require('./components/app');

var inputlist = document.querySelectorAll("div.math-input");

for(var index=0;index<inputlist.length;index++)
{
	var myid = inputlist[index].id;
	ReactDOM.render(<App containerid={myid} />, inputlist[index],);
}

