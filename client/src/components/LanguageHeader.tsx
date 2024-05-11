import { Share2Icon, Save } from 'lucide-react'
import { Button } from './ui/button'
import {
    Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from "./ui/select"
const LanguageHeader = () => {
    return (
        <div className="__helper_header h-[50px] bg-black text-white p-2 flex justify-between items-center">
            <div className='__btn_container flex gap-1'>
                <Button variant='success' className='flex justify-center items-center gap-1'><Save size={16} /> Save</Button>
                <Button variant='outline' className='flex justify-center items-center gap-1'><Share2Icon size={16} />Share</Button>
            </div>
            <div className='__tab_switcher'>
                <Select defaultValue='html'>
                    <SelectTrigger className='w-[100px] bg-gray-800 focus:ring-0'>
                        <SelectValue/>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value='javascript'>JavaScript</SelectItem>
                        <SelectItem value='html'>HTML</SelectItem>
                        <SelectItem value='css'>CSS</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>

    )
}

export default LanguageHeader