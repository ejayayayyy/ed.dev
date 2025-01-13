
export default function Tools() {
    return (
        <div className="grid grid-cols-8 md:grid-cols-6 lg:grid-cols-8 gap-4">
            <div className="col-span-4 md:col-span-2 p-4 rounded-lg border flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-50">
                <img src="/icons/Git.png" className="w-6 h-6" alt="" />
                <div className="flex flex-1 bg-rd-500">
                    <p className="w-full">Git</p>
                </div>
            </div>
            <div className="col-span-4 md:col-span-2 p-4 rounded-lg border flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-50">
                <img src="/icons/github.png" className="w-6 h-6" alt="" />
                <div className="flex flex-1 bg-rd-500">
                    <p className="w-full">Github</p>
                </div>
            </div>
            <div className="col-span-4 md:col-span-2 p-4 rounded-lg border flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-50">
                <img src="/icons/vscode.png" className="w-6 h-6" alt="" />
                <div className="flex flex-1 bg-rd-500">
                    <p className="w-full">VS Code</p>
                </div>
            </div>
            <div className="col-span-4 md:col-span-2 p-4 rounded-lg border flex items-center justify-center gap-6 transition-colors duration-150 hover:bg-gray-50">
                <img src="/icons/mysql.png" className="w-6 h-6" alt="" />
                <div className="flex flex-1 bg-rd-500">
                    <p className="w-full">MySQL</p>
                </div>
            </div>
        </div>
    )
}