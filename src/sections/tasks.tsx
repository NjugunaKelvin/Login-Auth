/* eslint-disable @typescript-eslint/no-unused-vars */
import { ClipboardList } from "lucide-react";

export default function Tasks() {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-white">Tasks</h2>
      <div className="bg-white/5 p-6 rounded-lg border border-white/10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-white/10 rounded-lg text-sm">All</button>
            <button className="px-3 py-1 rounded-lg text-sm hover:bg-white/5">Personal</button>
            <button className="px-3 py-1 rounded-lg text-sm hover:bg-white/5">Projects</button>
          </div>
          <button className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm">
            + Add Task
          </button>
        </div>
        <div className="space-y-3">
          {[
            { title: 'Update pitch deck with metrics', project: 'E-commerce', due: 'Today', completed: false },
            { title: 'Implement payment gateway', project: 'E-commerce', due: 'Tomorrow', completed: false },
            { title: 'Research competitor features', project: 'AI Tool', due: 'Friday', completed: true }
          ].map((task, i) => (
            <div key={i} className="flex items-start space-x-3 p-3 hover:bg-white/5 rounded-lg">
              <input 
                type="checkbox" 
                checked={task.completed} 
                className="mt-1 rounded bg-white/10 border-white/20"
              />
              <div className="flex-1">
                <p className={`${task.completed ? 'line-through text-white/40' : ''}`}>{task.title}</p>
                <div className="flex space-x-3 text-xs text-white/60 mt-1">
                  <span>{task.project}</span>
                  <span>Due: {task.due}</span>
                </div>
              </div>
              <button className="text-white/40 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}