export default function Milestones() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Milestones</h2>
      <div className="relative">
        <div className="absolute left-5 top-0 h-full w-px bg-white/10"></div>
        <div className="space-y-8">
          {[
            { date: 'June 2023', title: 'First MVP Completed', description: 'Launched initial version of e-commerce platform' },
            { date: 'August 2023', title: 'First 100 Users', description: 'Reached milestone of 100 active users' },
            { date: 'October 2023', title: 'First Investment Pitch', description: 'Presented to 3 angel investors' }
          ].map((milestone, i) => (
            <div key={i} className="relative pl-12">
              <div className="absolute left-5 top-1 w-3 h-3 rounded-full bg-blue-500 -ml-1.5"></div>
              <div className="bg-white/5 p-5 rounded-lg border border-white/10">
                <p className="text-sm text-blue-400">{milestone.date}</p>
                <h3 className="text-lg font-medium mt-1">{milestone.title}</h3>
                <p className="text-white/60 mt-2">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}