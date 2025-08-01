import { Bookmark } from "lucide-react";

export default function Resources() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { category: 'Learning', title: 'React Masterclass', source: 'Dev Academy' },
          { category: 'Templates', title: 'Pitch Deck Template', source: 'VC Resources' },
          { category: 'Tools', title: 'UI Component Library', source: 'Design System' },
          { category: 'Learning', title: 'Growth Hacking', source: 'Marketing Pros' },
          { category: 'Tools', title: 'Database Optimization', source: 'Tech Docs' },
          { category: 'Templates', title: 'User Flow Templates', source: 'Product Kit' }
        ].map((resource, i) => (
          <div key={i} className="bg-white/5 p-5 rounded-lg border border-white/10 hover:border-white/20 transition cursor-pointer">
            <div className="flex items-center justify-between">
              <span className="text-xs px-2 py-1 bg-white/10 rounded-full">{resource.category}</span>
              <button className="text-white/40 hover:text-white">
                <Bookmark size={16} />
              </button>
            </div>
            <h3 className="font-medium mt-3">{resource.title}</h3>
            <p className="text-sm text-white/60 mt-1">{resource.source}</p>
            <button className="text-sm mt-3 text-blue-400 hover:text-blue-300">
              View Resource
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}