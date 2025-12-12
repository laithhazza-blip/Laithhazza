import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import ProjectCard from '../../components/ProjectCard';

export default function ProjectsPage(){ const [projects,setProjects]=useState<any[]>([]); useEffect(()=>{ async function load(){ const { data } = await supabase.from('projects').select('*').order('created_at',{ascending:false}); setProjects(data||[]);} load(); },[]); return (<div><h1 className="text-2xl font-bold mb-4">المشاريع</h1><div className="grid md:grid-cols-3 gap-6">{projects.map(p=> <ProjectCard key={p.id} project={p} />)}</div></div>);
}
