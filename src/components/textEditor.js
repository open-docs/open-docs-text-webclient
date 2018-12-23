import React from 'react'
import {UnControlled as CodeMirror} from 'react-codemirror2'
require('codemirror/mode/gfm/gfm')
require('codemirror/mode/javascript/javascript')

const CMirrorEditor = ({store}) => (
  <CodeMirror value={store.doc.content}
    options={{
      mode: 'gfm',
      lineNumbers: true
    }}
    onChange={(editor, data, value) => {
      store.onChange('content', value)
    }}
  />
)

export default CMirrorEditor
