import LanguageHeader from "@/components/LanguageHeader"
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "../components/ui/resizable"
import CodeEditor from "@/components/CodeEditor"
const Compile = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
    >
      <ResizablePanel defaultSize={50} className="h-[calc(100dvh-60px)] min-w-[350px]">
        <LanguageHeader />
        <CodeEditor />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50} className=" h-[calc(100dvh-60px)] min-w-[350px] ">
        <span className="font-semibold">Right</span>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}

export default Compile