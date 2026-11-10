import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Lock, Cpu, Server, Network, Terminal as TerminalIcon } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: <Activity className="w-5 h-5" />, label: "Uptime", value: "99.99%", color: "text-green-400" },
    { icon: <Database className="w-5 h-5" />, label: "Ingested", value: "4.2 TB", color: "text-blue-400" },
    { icon: <Lock className="w-5 h-5" />, label: "Threats", value: "1,204", color: "text-red-400" },
    { icon: <Cpu className="w-5 h-5" />, label: "Node Load", value: "12%", color: "text-amber-400" },
  ];

  const logs = [
    { time: "02:44:12", event: "Encrypted stream established", status: "success" },
    { time: "02:43:58", event: "Node 04 rotation complete", status: "info" },
    { time: "02:42:01", event: "Handshake initiated - Sector 7", status: "info" },
    { time: "02:40:12", event: "Unrecognized packet rejected", status: "warning" },
    { time: "02:39:55", event: "System heartbeat stable", status: "success" },
    { time: "02:38:01", event: "Relay Alpha handshake complete", status: "success" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-32">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="text-sm font-bold tracking-[0.3em] text-amber-500 uppercase mb-2">Operational Status</h2>
          <p className="text-3xl font-light text-white tracking-tight">Protocol Command Center</p>
        </div>
        <div className="flex items-center gap-4 bg-white/5 p-2 px-4 rounded-full border border-white/10">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-6 h-6 rounded-full border-2 border-[#050505] bg-zinc-800" />
            ))}
          </div>
          <span className="text-xs text-zinc-400 font-mono">84 Nodes Active</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="stats-card relative group"
          >
            <div className={`absolute top-0 right-0 p-4 text-white/10 group-hover:text-white/20 transition-colors`}>
              {stat.icon}
            </div>
            <div className="text-xs font-bold tracking-widest text-zinc-500 uppercase mb-2">{stat.label}</div>
            <div className={`text-3xl font-light tracking-tight ${stat.color}`}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Console Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Feed */}
        <div className="lg:col-span-2 glass-card overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-white/10 bg-white/[0.02] flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-red-500/20 text-red-500">
                <TerminalIcon className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">Network Stream</h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-2 py-1 rounded bg-emerald-500/10">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-[10px] text-emerald-500 font-mono font-bold uppercase">Secure Connection</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 font-mono text-sm space-y-4 h-[400px] overflow-y-auto scrollbar-hide">
            {logs.map((log, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-6 items-start group"
              >
                <span className="text-zinc-600 shrink-0">[{log.time}]</span>
                <div className="flex items-center gap-3">
                   <span className={`w-1 h-1 rounded-full mt-1.5 ${
                    log.status === 'warning' ? 'bg-red-500' : 
                    log.status === 'success' ? 'bg-emerald-500' : 'bg-blue-500'
                   }`} />
                   <span className="text-zinc-300 group-hover:text-white transition-colors">{log.event}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* System Nodes */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
              <div className="w-1 h-4 bg-amber-500 rounded-full" />
              Node Topology
            </h3>
            <div className="space-y-6">
              <NodeItem name="Alpha-Prime" status="online" load="12%" />
              <NodeItem name="Zenith-Core" status="syncing" load="45%" />
              <NodeItem name="Nebula-Relay" status="online" load="88%" />
              <NodeItem name="Void-Edge" status="offline" load="0%" />
            </div>
          </div>
          
          <div className="glass-card p-6 bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/20">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-amber-500 mb-2">System Health</h3>
            <div className="text-2xl font-light text-white mb-1">Optimal</div>
            <p className="text-xs text-zinc-500">All protocols operating within nominal parameters.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const NodeItem = ({ name, status, load }) => (
  <div className="space-y-3">
    <div className="flex justify-between items-center">
      <span className="text-sm font-medium text-zinc-300">{name}</span>
      <span className="text-xs font-mono text-zinc-500">{load}</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: load === "0%" ? "0%" : load }}
        className={`h-full ${status === 'offline' ? 'bg-red-500/50' : 'bg-amber-500/50'}`} 
      />
    </div>
    <div className="flex items-center gap-2">
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === 'online' ? 'bg-emerald-500' : 
        status === 'syncing' ? 'bg-amber-500 animate-pulse' : 'bg-red-500'
      }`} />
      <span className="text-[10px] uppercase tracking-widest text-zinc-500">{status}</span>
    </div>
  </div>
);

export default Dashboard;
