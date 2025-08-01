import { FileText } from "lucide-react";

export default function PitchDecks() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Pitch Decks</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {['E-commerce v1.0', 'E-commerce v1.1', 'AI Tool Initial'].map((deck, i) => (
          <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/10 hover:border-white/20 transition cursor-pointer">
            <div className="flex items-center space-x-3">
              <FileText size={20} />
              <div>
                <h3 className="font-medium">{deck}</h3>
                <p className="text-sm text-white/60">Last updated: {i+1} week{i+1 !== 1 ? 's' : ''} ago</p>
              </div>
            </div>
            <div className="mt-3 flex space-x-2">
              <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">
                Share
              </button>
              <button className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}