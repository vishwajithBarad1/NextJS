import { ScearchBar } from "./ScearchBar"
export function AppBar(){

    return <div className="flex justify-between">
        <div>
            youtube logo
        </div>
        <div className="w-1/2">
            <ScearchBar/>
        </div>
        <div>
            login
        </div>
    </div>
}