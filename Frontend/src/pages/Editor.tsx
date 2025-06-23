import { useEffect, useState } from 'react';
import type { ChangeEvent } from 'react';
import { io, type Socket } from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { Copy, Share2, Download, Moon, Sun } from 'lucide-react';

interface RoomParams extends Record<string, string | undefined> {
    roomId: string;
  }

const Editor: React.FC = () => {
  const { roomId } = useParams<RoomParams>();
  const [code, setCode] = useState<string>('');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [connectedUsers, setConnectedUsers] = useState<number>(1);
  const [socket, setSocket] = useState<Socket | null>(null);
  const language = 'javascript';

  useEffect(() => {
    const newSocket: Socket = io('http://localhost:8080', {
      transports: ['websocket'],
      reconnectionAttempts: 5,
      forceNew: true,
    });

    setSocket(newSocket);

    newSocket.emit('join-room', roomId);
    console.log("Connected to room:", roomId);

    newSocket.on('code-update', (newCode: string) => {
      setCode(newCode);
    });

    newSocket.on('users-count', (count: number) => {
      setConnectedUsers(count);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId]);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = e.target.value;
    setCode(newCode);
    if (socket) {
      socket.emit('code-change', { roomId, code: newCode });
    }
  };

  const copyRoomLink = () => {
    navigator.clipboard.writeText(code);
    alert('code copied to clipboard!');
  };

  const downloadCode = () => {
    const element = document.createElement('a');
    const file = new Blob([code], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `code.${language === 'javascript' ? 'js' : language}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    alert('code downloaded successfully!');
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
      {/* Header */}
      <header className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between`}>
        <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.location.href = '/'} >
          <h1 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            CodeSync
          </h1>
          <div className={`px-3 py-1 rounded-full text-sm ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'}`}>
            Room: {roomId}
          </div>
        </div>

        <div className="flex items-center space-x-4">

          {/* Action Buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={copyRoomLink}
              className={`p-2 rounded-md transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Copy room link"
            >
              <Copy className="w-4 h-4" />
            </button>
            
            <button
              onClick={downloadCode}
              className={`p-2 rounded-md transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Download code"
            >
              <Download className="w-4 h-4" />
            </button>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`p-2 rounded-md transition-colors ${
                theme === 'dark' 
                  ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
              }`}
              title="Toggle theme"
            >
              {theme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}   
            </button>

            <button
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center space-x-2"
              onClick={copyRoomLink}
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Code Editor */}
        <div className="flex-1 flex flex-col">
          {/* Editor Toolbar */}
          <div className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'} border-b px-4 py-2 flex items-center justify-between`}>
            <div className="flex items-center space-x-4">
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {language.charAt(0).toUpperCase() + language.slice(1)}
              </span>
              <div className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                Lines: {code.split('\n').length} | Characters: {code.length}
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${connectedUsers > 1 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
              <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {connectedUsers > 1 ? 'Connected' : 'Waiting for others...'}
              </span>
            </div>
          </div>

          {/* Code Textarea */}
          <div className="flex-1 relative">
            <textarea
              value={code}
              onChange={handleChange}
              placeholder="Start typing your code here..."
              className={`w-full h-full resize-none p-4 font-mono text-sm leading-6 ${
                theme === 'dark'
                  ? 'bg-gray-900 text-gray-100 placeholder-gray-500'
                  : 'bg-white text-gray-900 placeholder-gray-400'
              } border-none outline-none focus:ring-0`}
              style={{
                fontFamily: "'JetBrains Mono', 'Fira Code', 'Monaco', 'Cascadia Code', monospace",
                lineHeight: '1.6',
                tabSize: 2
              }}
            />
            
            {/* Line numbers overlay (optional enhancement) */}
            <div className={`absolute left-0 top-0 w-12 h-full ${
              theme === 'dark' ? 'bg-gray-800 text-gray-500' : 'bg-gray-50 text-gray-400'
            } border-r ${
              theme === 'dark' ? 'border-gray-700' : 'border-gray-200'
            } flex flex-col text-xs font-mono pt-4 text-right pr-2 pointer-events-none select-none`}>
              {code.split('\n').map((_, index) => (
                <div key={index} className="leading-6 h-6">
                  {index + 1}
                </div>
              ))}
            </div>
            
            {/* Adjust textarea padding to account for line numbers */}
            <style>{`
              textarea {
                padding-left: 4rem !important;
              }
            `}</style>
          </div>
        </div>

        {/* Sidebar (Users/Chat) */}
        <div className={`w-80 ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-l flex flex-col`}>
          <div className={`p-4 border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Connected Users ({connectedUsers})
            </h3>
          </div>
          <div className="flex-1 p-4">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                You
              </div>
              <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>You</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editor;