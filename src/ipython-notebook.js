'use strict'

var React = require('react')
var IPythonNotebookMarkdownCell = require('./ipython-notebook-markdown-cell')
var IPythonNotebookCodeCell = require('./ipython-notebook-code-cell')
var IPythonNotebookRawCell = require('./ipython-notebook-raw-cell')

function renderCell (cell, i) {
  var IPythonNotebookCell = {
    markdown: IPythonNotebookMarkdownCell,
    code: IPythonNotebookCodeCell,
    raw: IPythonNotebookRawCell
  }[cell.cell_type]

  return (
    <IPythonNotebookCell
      data={cell}
      key={`ipnyb-cell-${i + 1}`}
    />
  )
}

var IPythonNotebook = (props) => (
  <div className='ipynb'>
    { props.data.cells.map(renderCell) }
  </div>
)

module.exports = IPythonNotebook
