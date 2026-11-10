import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Lock, Cpu, Server, Network } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: <Activity className="w-5 h-5" />, label: "Network Uptime", value: "99.99%" },
    { icon: <Database className="w-5 h-5" />, label: "Data Ingested", value: "4.2 TB" },
    { icon: <Lock className="w-5 h-5" />, label: "Threats Blocked", value: "1,204" },
    { icon: <Cpu className="w-5 h-5" />, label: "Node Load", value: "12%" },
  ];

  const logs = [
    { time: "02:44:12", event: "Encrypted stream established", status: "success" },
    { time: "02:43:58", event: "Node 04 rotation complete", status: "info" },
    { time: "02:42:01", event: "Handshake initiated - Sector 7", status: "info" },
    { time: "02:40:12", event: "Unrecognized packet rejected", status: "warning" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass glow-border p-6 rounded-2xl"
          >
            <div className="text-amber-500 mb-2">{stat.icon}</div>
            <div className="text-xs uppercase tracking-wider text-amber-200/40">{stat.label}</div>
            <div className="text-2xl font-bold text-amber-50">{stat.value}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Live Feed */}
        <div className="lg:col-span-2 glass glow-border rounded-2xl overflow-hidden flex flex-col">
          <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex justify-between items-center">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500">Live Network Stream</h3>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-green-500 font-mono">REC</span>
            </div>
          </div>
          <div className="p-6 font-mono text-xs space-y-3 h-[300px] overflow-y-auto scrollbar-hide">
            {logs.map((log, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-amber-700/60">[{log.time}]</span>
                <span className={
                  log.status === 'warning' ? 'text-red-400' : 
                  log.status === 'success' ? 'text-green-400' : 'text-amber-200/80'
                }>
                  {log.event}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Nodes */}
        <div className="glass glow-border rounded-2xl p-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-amber-500 mb-6">System Nodes</h3>
          <div className="space-y-6">
            <NodeItem name="Alpha-Prime" status="online" load="12%" />
            <NodeItem name="Zenith-Core" status="online" load="45%" />
            <NodeItem name="Nebula-Relay" status="syncing" load="88%" />
            <NodeItem name="Void-Edge" status="offline" load="0%" />
          </div>
        </div>
      </div>
    </section>
  );
};

const NodeItem = ({ name, status, load }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-mono text-amber-200/60">
      <span>{name}</span>
      <span>{load}</span>
    </div>
    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        animate={{ width: load === "0%" ? "0%" : load }}
        className={`h-full ${status === 'offline' ? 'bg-red-500/50' : 'bg-amber-500/50'}`} 
      />
    </div>
    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-tighter">
      <span className={`w-1.5 h-1.5 rounded-full ${
        status === 'online' ? 'bg-green-500' : 
        status === 'syncing' ? 'bg-amber-500 animate-pulse' : 'bg-red-500'
      }`} />
      <span className="text-amber-200/40">{status}</span>
    </div>
  </div>
);

export default Dashboard;
