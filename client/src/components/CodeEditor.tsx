import { useCallback, useState } from "react"
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from "@codemirror/lang-javascript"
import { tags as t } from '@lezer/highlight'
import { dracula, draculaInit } from "@uiw/codemirror-theme-dracula"
import { loadLanguage, langNames, langs } from "@uiw/codemirror-extensions-langs"
const CodeEditor = () => {
    const [value, setValue] = useState('')
    const onChange = useCallback((val: any) => {
        setValue(val)
    }, [])
    return (
        <CodeMirror
            value={value}
            height="100vh"
            extensions={[loadLanguage('javascript')!]}
            onChange={onChange}
            theme={
                draculaInit({
                    settings: {
                        caret: "#c6c6c6",
                        fontFamily: "monospace",
                    },
                    styles: [{ tag: t.comment, color: '#6277a4' }]
                })
            }
        />
    )
}

export default CodeEditor
