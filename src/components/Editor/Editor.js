import React, { useState, useEffect } from 'react'
import { Editor as ClassicEditor } from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'

import { useLocation } from 'react-router-dom'

const ReactCkEditor = (props) => {
  const [renderCount, setRenderCount] = useState(0)
  const { pathname } = useLocation()
  const [editor, setEditor] = useState()
  const showEditor = (props) => {
    const { body, setBody } = props
    setEditor(() => (
      <CKEditor
        editor={ClassicEditor}
        data={body}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor)
        }}
        onChange={(event, editor) => {
          const data = editor.getData()
          //  console.log(data)
          if (renderCount < 2) {
            setRenderCount(renderCount + 2)
          }
          setBody(data)
        }}
        config={{ placeholder: 'Content for your post...' }}
      />
    ))
  }

  useEffect(() => {
    if (renderCount < 2) {
      showEditor(props)
      setRenderCount(renderCount + 1)
    }
  }, [props.body])

  useEffect(() => {
    setRenderCount(0)
  }, [pathname])

  return <>{editor}</>
}

export default ReactCkEditor
